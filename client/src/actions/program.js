import { START_LOADING, END_LOADING, FETCH_ALL_PROGRAM, FETCH_PROGRAM_BY_CLIENT, FETCH_PROGRAM, CREATE_PROGRAM, UPDATE_PROGRAM, DELETE_PROGRAM } from '../constants/actionTypes'
import * as api from '../api/index.js'
import {  message } from 'antd'

export const getProgram = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProgram(id);
        dispatch({ type: FETCH_PROGRAM, payload: { program: data } });
    } catch (error) {
        console.log(error);
    }
}

export const getPrograms = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPrograms(); 
        dispatch({ type: FETCH_ALL_PROGRAM, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const getProgramByClient = (name) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchProgramByClient(name);
        dispatch({ type: FETCH_PROGRAM_BY_CLIENT, payload: { data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const createProgram = (program, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createProgram(program);
        dispatch({ type: CREATE_PROGRAM, payload: data });
        message.success('Program created');
        navigate(`/programs`);
    } catch (error) {
        message.error(error.message)
    }
}


export const updateProgram = (program, navigate) => async (dispatch) => {
    try {
        const { data } = await api.updateProgram( program);
        message.success('Program updated')
        dispatch({ type: UPDATE_PROGRAM, payload: data });
        navigate(`/programs`)
    } catch (error) {
        message.error(error.message)
    }
}

export const deleteProgram = (id) => async (dispatch) => {
    try {
        await await api.deleteProgram(id);
        dispatch({ type: DELETE_PROGRAM, payload: id });
        message.success('Program deleted')

    } catch (error) {
        message.error(error.message)
    }
}








export const deleteComment = (programId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.deleteComment(programId, commentId);
        dispatch({ type: UPDATE_PROGRAM, payload: data });
    } catch (error) {
        console.log(error);
    }
}



