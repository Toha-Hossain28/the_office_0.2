import axios from "axios";

const SENIOR_API_BASE_URL = "http://localhost:8080/api/seniors";

export const ListSeniors = () => {
    return axios.get(SENIOR_API_BASE_URL);
}

export const createSenior = (senior) => {
    return axios.post(SENIOR_API_BASE_URL, senior);
}

export const getSeniorById = (seniorId) => {
    return axios.get(SENIOR_API_BASE_URL + '/' + seniorId);
}

export const updateSenior = (seniorId, senior) => {
    return axios.put(SENIOR_API_BASE_URL + '/' + seniorId, senior);
}

export const deleteSenior = (seniorId) => {
    return axios.delete(SENIOR_API_BASE_URL + '/' + seniorId);
}