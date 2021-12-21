import { BehaviorSubject } from 'rxjs'

const burgerState = new BehaviorSubject(true)

const burgerService = {
  state: function(state) {
    burgerState.next(state)
  }
}

export {
  burgerService,
  burgerState
}