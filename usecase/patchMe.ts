import { https } from '@/lib/https';

export const patchMe = async (user: {
  displayName: string;
  publicHobbies: string[];
  privateHobbies: string[];
}) => {
  const response = await https.patch('/accounts/me', user);
  return response;
};
