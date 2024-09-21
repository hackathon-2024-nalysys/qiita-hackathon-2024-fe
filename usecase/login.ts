import * as z from 'zod';
import { https } from '@/lib/https';

export type LoginFormType = {
  name: string;
  password: string;
};

export const schema = z.object({
  name: z.string().min(1, '名前は必須です。'),
  password: z.string().min(1, 'パスワードは必須です。'),
});

export type Schema = z.infer<typeof schema>;

export const login = async (user: Schema) => {
  const response = await https.post('/auth/login', user);
  return response;
};
