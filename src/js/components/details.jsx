'use strict';

import React, {PropTypes} from 'react';
import {HeroActions} from '../actions/hero.js';
import { heroStore } from '../stores/hero.js';
import { browserHistory } from 'react-router'


export default class Details extends React.Component{
   constructor(props){
        super(props);
        this.state = {
           heroDetails: {}
        };
    }

    componentDidMount(){
      heroStore.addChangeListener(this._onChange);
      this.setState({
          heroDetails: heroStore.getHeroDetails(this.props.params.id)
      }, () => !Object.keys(this.state.heroDetails).length && this.props.params.id && HeroActions.fetchDetails(this.props.params.id))
    }


    componentWillUnmount(){
      heroStore.removeChangeListener(this._onChange);
    }
    goBack = () => browserHistory.goBack();
    
    _onChange = () => {
         this.setState({
          heroDetails: heroStore.getHeroDetails(this.props.params.id)
        })

    }
       
     
    render(){
      return(
        <div>
            <div style={{ fontSize: '4em', padding: '0.5em'}} onClick={this.goBack}> &#8592; Back </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>        
                {
                    this.state.heroDetails.thumbnail
                    &&
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div> 
                            <img  style={{ width:'200px', height:'200px', margin: '10px'}}  src={this.state.heroDetails.thumbnail.path + '.' + this.state.heroDetails.thumbnail.extension} alt=""/>
                        </div>
                        <div> 
                            <div>
                            {this.state.heroDetails.name}
                        </div>
                        <div>
                            {this.state.heroDetails.description}
                        </div>
                        </div>
                    </div>
                }
              
            </div>
            <div style={{fontSize: '25px'}} >
              Comics:
            </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        this.state.heroDetails.comics && this.state.heroDetails.comics.items.map((comics, index)=> 
                        <div key={index} style={{ fontSize: '20px', borderBottom: ' 1px solid #D3D3D3'}}>
                            {comics.name}
                        </div>)
                    }

                </div>
                <div style={{padding: '1em'}}/>

                <div style={{fontSize: '25px'}} >
                    Series:
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                     {
                        this.state.heroDetails.series && this.state.heroDetails.series.items.map((series, index)=> 
                        <div key={index} style={{ fontSize: '20px', borderBottom: ' 1px solid #D3D3D3'}}>
                            {series.name}
                        </div>)
                    }

                </div>
        </div>
      )
}
}