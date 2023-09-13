import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_FOLDER, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, FETCH_BY_CONSULTANT, FETCH_BY_CLIENT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getFolder = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchFolder(id);

    dispatch({ type: FETCH_FOLDER, payload: { folder: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getFolders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFolders(); 
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFolderByClient = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchFolderByClient(name);
    dispatch({ type: FETCH_BY_CLIENT, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFolderByConsultant = (name) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchFolderByConsultant(name);
      dispatch({ type: FETCH_BY_CONSULTANT, payload: { data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

export const getFoldersBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchFoldersBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFolder = (folder, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createFolder(folder);

    dispatch({ type: CREATE, payload: data });

    navigate(`/folders/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateFolder = (id, folder) => async (dispatch) => {
  try {
    const { data } = await api.updateFolder(id, folder);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};





export const deleteFolder = (id) => async (dispatch) => {
  try {
    await await api.deleteFolder(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};