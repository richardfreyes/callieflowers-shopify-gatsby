import { BehaviorSubject } from 'rxjs'
let defaultState = true;
// const isBrowser = typeof window !== 'undefined';

// if(isBrowser) {
//   if(window.innerWidth > 575) { 
//     defaultState = true 
//   }
// }

const burgerState = new BehaviorSubject(defaultState)

const burgerService = {
  state: function(state) {
    burgerState.next(state)
  }
}

export {
  burgerService,
  burgerState
}