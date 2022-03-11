import { FETCH_CLIENT_S } from '../constants/actionTypes';

export default (clientsec = [], action) => {
  switch (action.type) {
    case FETCH_CLIENT_S:
      return action.payload;
    default:
      return clientsec;
  }
};
