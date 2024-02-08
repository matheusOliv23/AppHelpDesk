import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_API_URL } from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
});

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('@token');

  if (token) {
    request.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`;
  }
  return request;
});
