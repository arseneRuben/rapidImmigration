import { START_LOADING, END_LOADING, FETCH_ALL_FOLDERS, FETCH_FOLDER, FETCH_BY_CLIENT_FOLDER, CREATE_FOLDER, UPDATE_FOLDER, DELETE_FOLDER, FETCH_BY_CONSULTANT_FOLDER } from '../../constants/actionTypes';

const folders = (state = { isLoading: true, folders: [] }, action) => {
    switch (action.type) {
    case START_LOADING:
        return { ...state, isLoading: true };

    case END_LOADING :
        return { ...state, isLoading: false };
    case FETCH_ALL_FOLDERS:
            return {
                ...state,
                folders: action.payload
            };
    case FETCH_FOLDER:
            return { ...state, folder: action.payload };
    case CREATE_FOLDER:
            return { ...state, folders: [...state.folders, action.payload] };
    case UPDATE_FOLDER:
        return { ...state, folders: state.folders.map((folder) => (folder._id === action.payload._id ? action.payload : folder)) };
    case DELETE_FOLDER:
        return { ...state, folders: state.folders.filter((folder) => folder._id !== action.payload) };
    case FETCH_BY_CLIENT_FOLDER:
        return { ...state, folders: action.payload };
    case FETCH_BY_CONSULTANT_FOLDER:
        return { ...state, folders: action.payload };
    default:
        return state;
    }
}
export default folders;

    