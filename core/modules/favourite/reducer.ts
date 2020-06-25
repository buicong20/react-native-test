import {SET_FAVOURITE} from './actions';

const initState = {
  list: [],
};

export const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FAVOURITE:
      return {...state, list: [...state.list, ...action.payload]};
    default:
      return state;
  }
};
