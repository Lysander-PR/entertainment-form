import axios from 'axios';
import { getAccessToken } from '@/api/auth-token';

export const entertainmentApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

entertainmentApi.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
