import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
import customers from './reducers/customer';
import programs from "./reducers/program";
import folders from "./reducers/folder";


export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
    customers: customers,
    programs : programs,
    folders : folders,
  },
});