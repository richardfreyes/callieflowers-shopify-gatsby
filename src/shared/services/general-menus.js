import { BehaviorSubject } from 'rxjs'

const burgerState = new BehaviorSubject(null)

const burgerService = {
  state: function(state) {
    burgerState.next(state)
  }
}

export {
  burgerService,
  burgerState
}