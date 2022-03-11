import { FETCH_PARTENAIRES } from '../constants/actionTypes';

export default (partenaires = [], action) => {
  switch (action.type) {
    case FETCH_PARTENAIRES:
      return action.payload;
    default:
      return partenaires;
  }
};
