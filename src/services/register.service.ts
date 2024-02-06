import { IRegister } from 'src/types/Register';
import { api } from './api';

const createAccount = async (data: IRegister) =>
  await api.post('/auth/register', data);

export const RegisterService = { createAccount };
