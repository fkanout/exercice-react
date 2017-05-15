'use strict';

import React, {PropTypes} from 'react';
import {HeroActions} from '../actions/hero.js';
import { heroStore } from '../stores/hero.js';
import { browserHistory } from 'react-router'


export default class Details extends React.Component{
   constructor(props){
        super(props);
        this.state = {
           
        };
    }
    componentDidMount(){
     HeroActions.fetchDetails(this.props.params.id);
    
    }
    componentWillUnmount(){

    }
   
     
    
    render(){
      return(
        <div>
            <div style={{ fontSize: '4em', padding: '0.5em'}} onClick={()=> browserHistory.goBack()}> &#8592; Back </div>
        </div>

      )
  }

}