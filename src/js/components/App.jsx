'use strict';

import React, {PropTypes} from 'react';
import {HeroActions} from '../actions/hero.js';
import { heroStore } from '../stores/hero.js';

export default class Main extends React.Component{
   constructor(props){
        super(props);
        this.state = {
            heroList: {}
        };
    }
    componentDidMount(){
      heroStore.addChangeListener(this._onChange);
      HeroActions.fetch();        
    }
    componentWillUnmount(){
      heroStore.removeChangeListener(this._onChange);
    }
    _onChange = () =>{
        this.setState({
          heroList: heroStore.getHerosList()
      })
    }
     

    
    
    render(){
      return(
        <div style={{display:'flex', flexWrap: 'wrap'}}>
          {
            Object.keys(this.state.heroList).map((key,indx) => 
              <div style={{ margin:'20px', width:'200px', height:'200px', background: 'gray', display:'flex', flexDirection:'column' }} key={indx} >
                <img style={{ width:'200px', height:'200px' }} 
                src={ `${this.state.heroList[key].thumbnail.path}.${this.state.heroList[key].thumbnail.extension}`} alt=""/>
                {this.state.heroList[key].name}
              </div>
            )
          }
        </div>

      )
  }

}