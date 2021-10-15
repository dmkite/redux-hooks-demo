
import {createStore, combineReducers } from 'redux'
import { UsabilityReducer, UserReducer } from './reducer';

const rootReducer = combineReducers({
    usabilityPreferences: UsabilityReducer,
    userState: UserReducer
  });

  export const store = createStore(rootReducer)