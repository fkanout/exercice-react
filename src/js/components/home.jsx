'use strict';

import React, {PropTypes} from 'react';
import {HeroActions} from '../actions/hero.js';
import { heroStore } from '../stores/hero.js';
import { browserHistory } from 'react-router'
import Hero from './ui/hero.jsx';

export default class Home extends React.Component{
   constructor(props){
        super(props);
        this.state = {
            heroList: {}
        };
    }
    componentDidMount(){
      heroStore.addChangeListener(this._onChange);
      this.setState({
          heroList: heroStore.getHerosList()
      }, () => !Object.keys(this.state.heroList).length && HeroActions.fetch())
    }

    componentWillUnmount(){
      heroStore.removeChangeListener(this._onChange);
    }
    gotoDetails = (id) => browserHistory.push('/details/' + id)
    

    _onChange = () =>
        this.setState({
          heroList: heroStore.getHerosList()
      })
    
     
    
    render(){
      return(
        <div>
          <div style={{fontSize: '3em', color:'#bc4b51', padding: '0.5em'}}> Liste des superhéros :</div>
            <div style={{display:'flex', flexWrap: 'wrap'}}>
            {
              Object.keys(this.state.heroList).map(key => 
              <Hero heroClicked={this.gotoDetails} heroData={ this.state.heroList[key] } />
              )
            }
          </div>
        </div>
      
      
      
       
      )
  }

}