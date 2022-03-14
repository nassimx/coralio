import { FETCH_ONESERVICE } from '../constants/actionTypes';

export default (services = [], action) => {
  switch (action.type) {
    case FETCH_ONESERVICE:
      return services.filter((service) => service.id !== action.payload);
    default:
      return services;
  }
};
