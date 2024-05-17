import axios from "axios";

const FRONTEND_API_BASE_URL = "http://localhost:8080/api/frontends";

export const ListFrontEnds = () => {
    return axios.get(FRONTEND_API_BASE_URL);
}

export const createFrontEnd = (frontend) => {
    return axios.post(FRONTEND_API_BASE_URL, frontend);
}

export const getFrontEndById = (frontendId) => {
    return axios.get(FRONTEND_API_BASE_URL + '/' + frontendId);
}

export const updateFrontEnd = (frontendId,frontend) => {
    return axios.put(FRONTEND_API_BASE_URL + '/' +frontendId, frontend);
}

export const deleteFrontEnd = (frontendId) => {
    return axios.delete(FRONTEND_API_BASE_URL + '/' +frontendId);
}