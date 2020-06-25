import {FETCH, SET_INFO} from './actions';

export const initState = {
  list: [],
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INFO:
      return {...state, list: action.payload};
    default:
      return state;
  }
};
