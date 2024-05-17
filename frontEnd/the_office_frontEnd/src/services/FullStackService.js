import axios from "axios";

const FullStack_API_BASE_URL = "http://localhost:8080/api/fullstacks";

export const ListFullStack = () => {
    return axios.get(FullStack_API_BASE_URL);
}

export const createFullStack = (fullstack) => {
    return axios.post(FullStack_API_BASE_URL, fullstack);
}

export const getFullStackById = (fullstackId) => {
    return axios.get(FullStack_API_BASE_URL + '/' + fullstackId);
}

export const updateFullStack = (fullstackId, fullstack) => {
    return axios.put(FullStack_API_BASE_URL + '/' + fullstackId, fullstack);
}

export const deleteFullStack = (fullstackId) => {
    return axios.delete(FullStack_API_BASE_URL + '/' + fullstackId);
}