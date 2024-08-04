import axios from "./axios.js";

export const getLocalidadesRequest = () => axios.get('/localidades');

export const getLocalidadRequest = (id) => axios.get(`/localidades/${id}`);

export const createLocalidadRequest = (localidad) => axios.post('/localidades', localidad);

export const updateLocalidadRequest = (id, localidad) => axios.put(`/localidades/${id}`, localidad);

export const deleteLocalidadRequest = (id) => axios.delete(`/localidades/${id}`);