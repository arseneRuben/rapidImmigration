import { START_LOADING, END_LOADING, FETCH_CUSTOMER, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, FETCH_BY_CONSULTANT, FETCH_BY_CLIENT, FETCH_ALL_CUSTOMER } from '../constants/actionTypes';
import * as api from '../api/index.js';
import {  message } from 'antd'

export const getCustomer = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchCustomer(id);
    dispatch({ type: FETCH_CUSTOMER, payload: { customer: data } });
  } catch (error) {
    message.error(error.message)
  }
};

export const getCustomers = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchCustomers(page); 
    dispatch({ type: FETCH_ALL_CUSTOMER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    message.error(error.message)
  }
};



export const getCustomersBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchCustomersBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCustomer = (customer,formValues, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createCustomer(customer);
    const {values} = await api.insertOthers(formValues);
    dispatch({ type: CREATE, payload: data })
    dispatch({ type: END_LOADING });
    message.success('customer created')
    navigate(`/customers`);
  } catch (error) {
    message.error(error.message)
  }
};

export const updateCustomer = (id,formValues, costomer) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateCustomer(id, costomer);
    const {values} = await api.updateOthers(formValues);
    message.success('costomer updated')
    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    message.error(error.message)
  }
};





export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await api.deleteOthersByCustomer(id)
    await api.deleteFoldersByCustomer(id)
    await api.deleteCustomer(id);

    dispatch({ type: DELETE, payload: id });
    message.success('costomer deleted')
  } catch (error) {
    message.error('Delete failed')
  }
};