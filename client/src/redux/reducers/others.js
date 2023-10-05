import {INSERT_OTHERS,FETCH_OTHERS_BY_CUSTOMER} from '../../constants/actionTypes'


const others= (state = { isLoading: true, customers: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
   
    case FETCH_OTHERS_BY_CUSTOMER:
        return { ...state, others: action.payload };
    
    case INSERT_OTHERS:
        return { ...state, others: [...state.others, action.payload] };

      default:
      return state;
  }
};

export default others;