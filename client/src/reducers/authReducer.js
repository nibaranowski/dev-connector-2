import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
        return {
            ...state, //return current state
            isAuthenticated: !isEmpty(action.payload), //payload should be filled with decoded user (if logged in)
            user: action.payload
        }
    default:
      return state;
  }
}
