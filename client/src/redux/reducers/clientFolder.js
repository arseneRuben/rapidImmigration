
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CONSULTANT, FETCH_FOLDER, CREATE, UPDATE, DELETE } from "../../constants/actionTypes";

const folders= (state = { isLoading: true, folders: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        folders: action.payload,
       
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CONSULTANT:
      return { ...state, folders: action.payload.data };
    case FETCH_FOLDER:
      return { ...state, folder: action.payload.folder };
   
    case CREATE:
      return { ...state, folders: [...state.folders, action.payload] };
    case UPDATE:
      return { ...state, folders: state.folders.map((folder) => (folder._id === action.payload._id ? action.payload : folder)) };
    case DELETE:
      return { ...state, folders: state.folders.filter((folder) => folder._id !== action.payload) };
    default:
      return state;
  }
};

export default folders;