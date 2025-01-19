import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/auth";

export const registerUser = async (data) => {
    return axios.post(`${API_BASE_URL}/register`, data);
};

export const loginUser = async (data) => {
    return axios.post(`${API_BASE_URL}/login`, data);
};

export const fetchUserProfile = async () => {
    return axios.get(`${API_BASE_URL}/profile`, { withCredentials: true });
};

export const logoutUser = async () => {
    return axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
};
