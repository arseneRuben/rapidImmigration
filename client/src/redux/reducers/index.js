import { combineReducers } from 'redux';

import customers from './customer';
import programs from './program';
import folders from './folder';



export const reducers = combineReducers({ programs, customers, folders });