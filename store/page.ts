import { create } from "zustand";

type State = {
  page: number;
};

type Action = {
  setPage: (page: number) => void;
};

const usePageStore = create<State & Action>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));

export { usePageStore };
