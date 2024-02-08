import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: `https://rocket-help.yupiweb.com.br/api`,
});

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('@token');

  if (token) {
    request.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`;
  }
  return request;
});
