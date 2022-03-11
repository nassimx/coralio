import { FETCH_CLIENTS } from '../constants/actionTypes';

export default (clients = [], action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    default:
      return clients;
  }
};
