import { combineReducers } from 'redux';

import folders from './clientFolder';
import programs from './program';


export const reducers = combineReducers({ folders, programs });