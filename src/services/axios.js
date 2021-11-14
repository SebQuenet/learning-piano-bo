import axios from 'axios';
import { API_BASE_URL } from '../constants';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 50000,
  headers: {},
});

export default instance;
