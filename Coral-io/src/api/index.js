import axios from 'axios';

const API = axios.create({ baseURL: 'https://coral-io.fr/api' });

// const url = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchPosts = () => API.get('/');
export const fetchService = () => API.get(`/services`);
export const fetchOneService = (id) => API.get(`/services/${id}`);
export const fetchClientSec = () => API.get(`/clientsec`);
export const fetchPartenaires = () => API.get(`/partenaires`);
export const fetchRecrutement = () => API.get(`/recrutement`);
export const fetchContact = () => API.get(`/contact`);
export const fetchClients = () => API.get(`/clients`);
