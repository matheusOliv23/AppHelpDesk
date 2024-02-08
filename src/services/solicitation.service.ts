import { api } from './api';

const createSolicitation = async (solicitation: ISolicitation) => {
  api.post('/tickets', solicitation);
};

const getSolicitations = async (page: string) => {
  const res = await api.get(`/tickets?page=${page}`);
  return res.data;
};

const getSolicitationById = async (id: string) => {
  const res = await api.get(`/tickets/${id}`);
  return res.data;
};

const closeSolicitation = async (id: string, solution: string) =>
  api.put(`/tickets/${id}`, { solution });

export const SolicitationService = {
  createSolicitation,
  getSolicitations,
  getSolicitationById,
  closeSolicitation,
};
