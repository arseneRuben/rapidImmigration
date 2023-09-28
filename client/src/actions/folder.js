import { START_LOADING, END_LOADING, FETCH_ALL_FOLDERS, FETCH_FOLDER, FETCH_BY_CLIENT_FOLDER, CREATE_FOLDER, UPDATE_FOLDER, DELETE_FOLDER, FETCH_BY_CONSULTANT_FOLDER } from '../constants/actionTypes';
import * as api from '../api/index.js';
import {  message } from 'antd'

export const getFolders = (page) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchFolders(page);
    dispatch({ type: FETCH_ALL_FOLDERS, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
} catch (error) {
    message.error(error.message)
}
}

export const getFolder = (id) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFolder(id);
    dispatch({ type: FETCH_FOLDER, payload: { folder: data } });
 } catch (error) {
    message.error(error.message)
}
}

export const createFolder = (folder, navigate) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createFolder(folder);
    dispatch({ type: CREATE_FOLDER, payload: data });
    message.success('Folder created');
    navigate(`/folders`);
} catch (error) {
    message.error(error.message)
}
}

export const updateFolder = (folder, navigate) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateFolder(folder);
    dispatch({ type: UPDATE_FOLDER, payload: data });
    message.success('Folder updated');
    navigate(`/folders`);
 } catch (error) {
    message.error(error.message)
}
}


export const getFoldersByClient = (name) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchFoldersByClient(name);
    dispatch({ type: FETCH_BY_CLIENT_FOLDER, payload: { data } });
    dispatch({ type: END_LOADING });
 } catch (error) {
    message.error(error.message)
}
}

export const getFoldersByConsultant = (name) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchFoldersByConsultant(name);
    dispatch({ type: FETCH_BY_CONSULTANT_FOLDER, payload: { data } });
    dispatch({ type: END_LOADING });
 } catch (error) {
    message.error(error.message)
}
}


export const deleteFolder = (id, navigate) => async (dispatch) => {
    try {
    dispatch({ type: START_LOADING });
    await api.deleteFolder(id);
    dispatch({ type: DELETE_FOLDER, payload: id });
    message.success('Folder deleted successfully');
    navigate('/folders');
 } catch (error) {
    message.error(error.message);
}
}



