import {mainDispatcher} from '../Dispatcher';
import Constant from '../Constants';
import $ from 'jquery';
import crypto from 'crypto'


const URL = 'http://gateway.marvel.com:80';
const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';

/* eslint-disable no-console */

export const HeroActions = {
    fetch: () => {
      const timeStamp = new Date();
      const strToHash = timeStamp + API_PRIVATE + API_PUBLIC;
      const hash = crypto.createHash('md5').update(strToHash).digest('hex')
      $.ajax({
        url: `${URL}/v1/public/characters`,
        cache: true,
        crossDomain: true,
        type: 'GET',
        data: {
          ts: timeStamp,
          apikey: API_PUBLIC,
          hash: hash
        },
        dataType: 'json',
      }).then(heroList =>{
           mainDispatcher.dispatch({
            action: Constant.HEROS.FETCHED,
            content: heroList.data.results
        });
      })
  
  
  },

  fetchDetails(characterId) {
      const timeStamp = new Date();
      const strToHash = timeStamp + API_PRIVATE + API_PUBLIC;
      const hash = crypto.createHash('md5').update(strToHash).digest('hex')
      $.ajax({
        url: `${URL}/v1/public/characters/${characterId}`,
        cache: true,
        crossDomain: true,
        type: 'GET',
        data: {
          ts: timeStamp,
          apikey: API_PUBLIC,
          hash: hash
        },
        dataType: 'json',
      }).then(heroDetails =>{
           mainDispatcher.dispatch({
            action: Constant.HEROS.DETAILS_FETCHED,
            content: heroDetails.data.results[0]
        });
      })
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...', task);
  }
};
