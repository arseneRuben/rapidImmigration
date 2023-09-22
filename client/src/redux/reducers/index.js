import { combineReducers } from 'redux';

import customers from './customer';
import programs from './program';


export const reducers = combineReducers({ folders, programs });