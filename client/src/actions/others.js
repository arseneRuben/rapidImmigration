import * as api from '../api/index.js';
import {  message } from 'antd'

export const insertOthers = (formValues) => async () => {
    try {
    const { data } = await api.insertOthers(formValues);
    console.log(formValues, data)

    message.success('New extra-info created');
} catch (error) {
    message.error(error.message)
}
}