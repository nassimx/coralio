import { combineReducers } from 'redux';

import posts from './posts';
import services from './services';
import clientsec from './clientsec';
import partenaires from './partenaires';
import contact from './contact';
import clients from './clients';

export default combineReducers({
  posts,
  services,
  clientsec,
  partenaires,
  contact,
  clients,
});
