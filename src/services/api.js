import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
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

// ─── Location APIs ────────────────────────────────────────────

export const getLocationHierarchy = async () => {
    const res = await api.get('/orders/locations/hierarchy');
    return res.data;
};

// Vendor Delivery Areas
export const getVendorDeliveryAreas = async () => {
    const res = await api.get('/orders/locations/vendor-delivery-areas');
    return res.data;
};
export const addVendorDeliveryAreas = async (payload) => {
    const res = await api.post('/orders/locations/vendor-delivery-areas', payload);
    return res.data;
};
export const deleteVendorDeliveryArea = async (id) => {
    const res = await api.delete(`/orders/locations/vendor-delivery-areas/${id}`);
    return res.data;
};

// Super-Admin Location CRUD
export const createCountry  = async (data) => (await api.post('/orders/locations/countries', data)).data;
export const createState    = async (data) => (await api.post('/orders/locations/states', data)).data;
export const createDistrict = async (data) => (await api.post('/orders/locations/districts', data)).data;
export const createTaluka   = async (data) => (await api.post('/orders/locations/talukas', data)).data;
export const createArea     = async (data) => (await api.post('/orders/locations/areas', data)).data;

export const deleteCountry  = async (id) => (await api.delete(`/orders/locations/countries/${id}`)).data;
export const deleteState    = async (id) => (await api.delete(`/orders/locations/states/${id}`)).data;
export const deleteDistrict = async (id) => (await api.delete(`/orders/locations/districts/${id}`)).data;
export const deleteTaluka   = async (id) => (await api.delete(`/orders/locations/talukas/${id}`)).data;
export const deleteArea     = async (id) => (await api.delete(`/orders/locations/areas/${id}`)).data;

export default api;

