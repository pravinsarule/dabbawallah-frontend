import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Registration failed');
    }
};

export const sendOtp = async ({ email }) => {
    try {
        const response = await api.post('/auth/send-otp', { email });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Send OTP failed');
    }
};

export const verifyOtp = async ({ email, otp }) => {
    try {
        const response = await api.post('/auth/verify-otp', { email, otp });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Verify OTP failed');
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Login failed');
    }
};

export const getMe = async () => {
    try {
        const response = await api.get('/auth/me');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Get user failed');
    }
};

export const getVendorProfile = async () => {
    try {
        const response = await api.get('/auth/vendor/profile');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Get vendor profile failed');
    }
};

export const upsertVendorProfile = async (profile) => {
    try {
        const response = await api.post('/auth/vendor/profile', profile);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Save vendor profile failed');
    }
};

export const getUserProfile = async () => {
    try {
        const response = await api.get('/auth/user/profile');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Get profile failed');
    }
};

export const updateUserProfile = async (profileData) => {
    try {
        const response = await api.put('/auth/user/profile', profileData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Update profile failed');
    }
};

export default api;
