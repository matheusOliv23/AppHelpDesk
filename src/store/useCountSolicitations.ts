import { create } from 'zustand';

interface Props {
  number: number;
  setNumber: (newNumber: number) => void;
}

const useCountSolicitations = create<Props>((set) => ({
  number: 0,
  setNumber: (newNumber: number) => set({ number: newNumber }),
}));

export default useCountSolicitations;
