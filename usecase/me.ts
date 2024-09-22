import { https } from '@/lib/https';

export const fetchMe = async () => {
  const response = await https.get<{
    displayName: string;
    publicHobbies: string[];
    privateHobbies: string[];
  }>('/accounts/me');
  return response;
};
