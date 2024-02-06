import axios from 'axios';

export const api = axios.create({
  baseURL: `https://rocket-help.yupiweb.com.br/api`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
