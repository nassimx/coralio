import { FETCH_RECRUTEMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, recrutement: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_RECRUTEMENT:
      return {
        ...state,
        recrutement: action.payload,
      };
    default:
      return state;
  }
};
