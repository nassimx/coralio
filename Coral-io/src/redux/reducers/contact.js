import { FETCH_CONTACT } from '../constants/actionTypes';

export default (contact = [], action) => {
  switch (action.type) {
    case FETCH_CONTACT:
      return action.payload;
    default:
      return contact;
  }
};
