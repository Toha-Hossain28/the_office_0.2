import axios from "axios";
const Juniors_API_BASE_URL = "http://localhost:8080/api/juniors";

export const ListJuniors = () => {
    return axios.get(Juniors_API_BASE_URL);
}

export const createJunior = (junior) => {
    return axios.post(Juniors_API_BASE_URL, junior);
}

export const getJuniorById = (juniorId) => {
    return axios.get(Juniors_API_BASE_URL + '/' + juniorId);
}

export const updateJunior = (juniorId, junior) => {
    return axios.put(Juniors_API_BASE_URL + '/' + juniorId, junior);
}

export const deleteJunior = (juniorId) => {
    return axios.delete(Juniors_API_BASE_URL + '/' + juniorId);
}