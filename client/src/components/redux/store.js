import {configureStore} from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';

export default configureStore({
    reducer: {
        alerts : alert=alertSlice.reducer,
        user: userSlice.reducer,
    }
})