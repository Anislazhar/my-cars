import axios from "axios";

// These are default values for axios requests
axios.defaults.baseURL = "https://cars-api-app-48918ef0d803.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
