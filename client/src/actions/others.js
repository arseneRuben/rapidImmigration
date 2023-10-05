import * as api from '../api/index.js';
import {  message } from 'antd'
import { END_LOADING, FETCH_OTHERS_BY_CUSTOMER, START_LOADING } from '../constants/actionTypes.js';

export const insertOthers = (formValues) => async () => {
    try {
    const { data } = await api.insertOthers(formValues);
    message.success('New extra-info created');
} catch (error) {
    message.error(error.message)
}
}


export const fetchOthersByCustomer = (customerId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchOthersByCustomer(customerId);
        dispatch({ type: FETCH_OTHERS_BY_CUSTOMER, payload: data });
        dispatch({ type: END_LOADING });    } catch (error) {
        message.error(error.message)
    }
}   

