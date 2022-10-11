import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducerAnime from '../Reducers';

const rootReducer = combineReducers(
  {
    reducerAnime,
  }  
);

const store = createStore(rootReducer, composeWithDevTools())

export default store;