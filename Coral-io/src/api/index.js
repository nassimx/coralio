import axios from 'axios';

// const url = 'http://localhost:8008/api';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchPosts = () => axios.get(axiosInstance);
export const fetchService = () => axios.get(`${axiosInstance}/services`);
export const fetchClientSec = () => axios.get(`${axiosInstance}/clientsec`);
export const fetchPartenaires = () => axios.get(`${axiosInstance}/partenaires`);
export const fetchContact = () => axios.get(`${axiosInstance}/contact`);
export const fetchClients = () => axios.get(`${axiosInstance}/clients`);
