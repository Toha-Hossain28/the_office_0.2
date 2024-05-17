import axios from "axios";

const DevOps_API_BASE_URL = "http://localhost:8080/api/devops";

export const ListDevOps = () => {
    return axios.get(DevOps_API_BASE_URL);
}

export const createDevOps = (devops) => {
    return axios.post(DevOps_API_BASE_URL, devops);
}

export const getDevOpsById = (devopsId) => {
    return axios.get(DevOps_API_BASE_URL + '/' + devopsId);
}

export const updateDevOps = (devopsId, devops) => {
    return axios.put(DevOps_API_BASE_URL + '/' + devopsId, devops);
}

export const deleteDevOps = (devopsId) => {
    return axios.delete(DevOps_API_BASE_URL + '/' +devopsId);
}