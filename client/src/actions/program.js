import { START_LOADING, END_LOADING, FETCH_ALL_PROGRAM, FETCH_PROGRAM_BY_CLIENT, FETCH_PROGRAM, CREATE_PROGRAM, UPDATE_PROGRAM, DELETE_PROGRAM } from '../constants/actionTypes';
import * as api from '../api/index.js';
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
        navigate(`/program/${data._id}`);
        message.success('Program created');
    } catch (error) {
        message.error(error.message)
    }
}

export const updateProgram = (id, program) => async (dispatch) => {
    try {
        const { data } = await api.updateProgram(id, program);
        dispatch({ type: UPDATE_PROGRAM, payload: data });
        message.success('Program updated')
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

export const likeProgram = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const { data } = await api.likeProgram(id, user?.token);
        dispatch({ type: UPDATE_PROGRAM, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const commentProgram = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.commentProgram(id, value);
        dispatch({ type: UPDATE_PROGRAM, payload: data });
    } catch (error) {
        console.log(error);
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



