import axios from 'axios';
import { config } from '../config/config';

export const axiosInstance = axios.create({
  baseURL: config.primoApi,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
