import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
import folders from './reducers/clientFolder';

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
    folders: folders,
  },
});