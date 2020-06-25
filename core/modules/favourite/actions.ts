export const ADD_FAVOURITE = 'favourite/ADD';
export const GET_FAVOURITE = 'favourite/GET';
export const SET_FAVOURITE = 'favourite/SET';

export const addFavourite = (payload) => ({
  type: ADD_FAVOURITE,
  payload,
});

export const getFavourite = () => ({
  type: GET_FAVOURITE
});

export const setFavourite = (payload) => ({
  type: SET_FAVOURITE,
  payload,
});