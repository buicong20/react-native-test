export const FETCH = 'app/FETCH';
export const GET_INFO = 'app/GET_INFO';
export const SET_INFO = 'app/SET_INFO';
export const fetch = () => ({
  type: FETCH,
});

export const getInfo = (payload) => ({
  type: GET_INFO,
  payload
});

export const setInfo = (payload) => ({
  type: SET_INFO,
  payload,
});
