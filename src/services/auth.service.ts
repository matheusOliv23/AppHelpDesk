import { AuthData } from 'src/context/Auth';
import { api } from './api';

async function signIn(email: string, password: string): Promise<AuthData> {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
}

async function signOut(): Promise<void> {
  const response = await api.post('/auth/logout');
  return response.data;
}

export const AuthService = { signIn, signOut };
