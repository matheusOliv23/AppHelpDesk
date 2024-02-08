interface ISolicitation {
  title: string;
  description: string;
}

interface ISolicitationResponse {
  id: string;
  status: 'open' | 'closed';
  description: string;
  title: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
}