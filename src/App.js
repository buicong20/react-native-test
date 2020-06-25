import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from 'core/frameworks';
import Home from './screen/home/Home';

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Home/>
      </React.Fragment>
    </Provider>
  );
};

export default App;
