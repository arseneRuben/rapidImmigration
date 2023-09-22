
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CONSULTANT, FETCH_CUSTOMER, CREATE, UPDATE, DELETE } from "../../constants/actionTypes";

const customers= (state = { isLoading: true, customers: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        customers: action.payload,
       
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CONSULTANT:
      return { ...state, customers: action.payload.data };
    case FETCH_CUSTOMER:
      return { ...state, customer: action.payload };
   
    case CREATE:
      return { ...state, customers: [...state.customers, action.payload] };
    case UPDATE:
      return { ...state, customers: state.customers.map((customer) => (customer._id === action.payload._id ? action.payload : customer)) };
    case DELETE:
      return { ...state, customers: state.customers.filter((customer) => customer._id !== action.payload) };
    default:
      return state;
  }
};

export default customers;