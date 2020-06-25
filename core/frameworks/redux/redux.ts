import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  const enhancer = compose(applyMiddleware(...middleware));
  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
