import { https } from '@/lib/https';

export const fetchMe = async () => {
  const response = await https.get('/accounts/me');
  return response;
};
