import {
  FETCH_ALL,
  FETCH_SERVICE,
  FETCH_CLIENT_S,
  FETCH_PARTENAIRES,
  FETCH_CONTACT,
  FETCH_CLIENTS,
  FETCH_ONESERVICE,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes';

import * as api from '../../api/index.js';

export const getHeroSection = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getServiceData = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchService();

    dispatch({ type: FETCH_SERVICE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getService = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchOneService(id);

    dispatch({ type: FETCH_ONESERVICE, payload: { service: data } });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getClientSec = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchClientSec();

    dispatch({ type: FETCH_CLIENT_S, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPartenaires = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPartenaires();

    dispatch({ type: FETCH_PARTENAIRES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getContact = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchContact();

    dispatch({ type: FETCH_CONTACT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getClients = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchClients();

    dispatch({ type: FETCH_CLIENTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
