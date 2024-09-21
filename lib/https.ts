import axios from 'axios';

export const https = axios.create({
  baseURL: 'https://hackathon.grainrigi.net/v1',
  timeout: 10000, // タイムアウトを指定（オプション）
  headers: { 'Content-Type': 'application/json' },
});
