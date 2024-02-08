import { api } from './api';

const createSolicitation = async (solicitation: ISolicitation) => {
  api.post('/tickets', solicitation);
};

export const SolicitationService = { createSolicitation };
