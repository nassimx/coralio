import { FETCH_ONESERVICE, FETCH_SERVICE } from '../constants/actionTypes';
// (state = { isLoading: true, posts: [] }, action)
export default (state = { isLoading: true, services: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    case FETCH_ONESERVICE:
      return { ...state, service: action.payload.service };
    default:
      return state;
  }
};
