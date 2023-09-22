import { FETCH_ALL_PROGRAM,  FETCH_PROGRAM_BY_CLIENT,  CREATE_PROGRAM, UPDATE_PROGRAM, DELETE_PROGRAM, FETCH_PROGRAM } from "../../constants/actionTypes";

const programs = (state = { isLoading: true, programs: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
        return { ...state, isLoading: true };
        case 'END_LOADING':
        return { ...state, isLoading: false };
        case FETCH_ALL_PROGRAM:
        return {
            ...state,
            programs: action.payload,
        };
        case FETCH_PROGRAM_BY_CLIENT:
        return { ...state, programs: action.payload.data };
        case CREATE_PROGRAM:
        return { ...state, programs: [...state.programs, action.payload] };
        case FETCH_PROGRAM:
        return { ...state, program: action.payload };
        case UPDATE_PROGRAM:
        return { ...state, programs: state.programs.map((program) => (program._id === action.payload._id ? action.payload : program)) };
        case DELETE_PROGRAM:
        return { ...state, programs: state.programs.filter((program) => program._id !== action.payload) };
        default:
        return state;
    }
}
export default programs;