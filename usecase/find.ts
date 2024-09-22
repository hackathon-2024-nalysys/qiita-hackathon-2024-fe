import { https } from '@/lib/https';

export type Account = {
  id: string;
  name: string;
  icon?: string;
  displayName: string;
  affiliation: string;
  publicHobbies: string[];
  privateHobbies: string[];
};
type FellowsDataType = {
  byHobby: { hobby: string; isPublic: boolean; accounts: Account[] }[];
};
export const fetchFellows = async () => {
  const response = await https.get<FellowsDataType>('/accounts/fellows');
  return response;
};
