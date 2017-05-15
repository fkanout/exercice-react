import {EventEmitter} from 'events';
import {mainDispatcher} from '../Dispatcher';
import Constant from '../Constants';

const CHANGE_EVENT = 'heroChanged';

class HeroStore extends EventEmitter {

  constructor() {
    super();
    this.heros = {};

  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  setHeros(heros){
    this.heros = heros;
    this.emitChange();
  }

  getHerosList (){
   return this.heros;
  }


}
export const heroStore = new HeroStore();

heroStore.dispatchToken = mainDispatcher.register(function(payload){
	switch (payload.action){
        case Constant.HEROS.FETCHED:
          heroStore.setHeros(payload.content)
        default:
          break;
    }
});

