import {combineReducers} from 'redux';
import {appReducer} from 'core/modules/app';
import {favouriteReducer} from 'modules/favourite';
const rootReducer = combineReducers({
  app: appReducer,
  favourite: favouriteReducer,
});

export default rootReducer;
