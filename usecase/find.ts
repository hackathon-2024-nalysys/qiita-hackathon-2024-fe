import { https } from '@/lib/https';

export type Account = {
  id: string;
  name: string;
  displayName: string;
  affiliation: string;
  publicHobbies: string[];
  privateHobbies: string[];
};
type FellowsDataType = {
  byHobby: { hobby: string; accounts: Account[] }[];
};
export const fetchFellows = async () => {
  const response = await https.get<FellowsDataType>('/accounts/fellows');
  return response;
};
