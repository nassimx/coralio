import axios from 'axios';

const url = 'http://91.134.28.235/api';

// const url = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchPosts = () => axios.get(url);
export const fetchService = () => axios.get(`${url}/services`);
export const fetchClientSec = () => axios.get(`${url}/clientsec`);
export const fetchPartenaires = () => axios.get(`${url}/partenaires`);
export const fetchContact = () => axios.get(`${url}/contact`);
export const fetchClients = () => axios.get(`${url}/clients`);
