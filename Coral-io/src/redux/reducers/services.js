import { FETCH_SERVICE } from '../constants/actionTypes';

export default (services = [], action) => {
  switch (action.type) {
    case FETCH_SERVICE:
      return action.payload;
    default:
      return services;
  }
};
