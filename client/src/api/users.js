import axios from "./axios.js";

export const getUsersRequest = () => axios.get('/users');

export const deleteUserRequest = (id) => axios.delete(`/users/${id}`);