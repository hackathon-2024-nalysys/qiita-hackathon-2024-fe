import axios from 'axios';

export const https = axios.create({
  baseURL: '/api/v1',
  timeout: 10000, // タイムアウトを指定（オプション）
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
