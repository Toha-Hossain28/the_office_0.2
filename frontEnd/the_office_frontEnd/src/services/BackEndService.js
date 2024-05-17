import axios from "axios";

const BackEnd_API_BASE_URL = "http://localhost:8080/api/backEnds";

export const ListBackends = () => {
    return axios.get(BackEnd_API_BASE_URL);
}

export const createBackEnd = (backend) => {
    return axios.post(BackEnd_API_BASE_URL, backend);
}

export const getBackEndById = (backendId) => {
    return axios.get(BackEnd_API_BASE_URL + '/' + backendId);
}

export const updateBackEnd = (backendId, backend) => {
    return axios.put(BackEnd_API_BASE_URL + '/' + backendId, backend);
}

export const deleteBackEnd = (backendId) => {
    return axios.delete(BackEnd_API_BASE_URL + '/' + backendId);
}
