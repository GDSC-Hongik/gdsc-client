import { create } from 'zustand';

export default function useUnivEmail() {
  return {
    univEmail: useUnivEmailStore.getState().univEmail,
    updateUnivEmail: (univEmail: string | undefined) =>
      useUnivEmailStore.setState({ univEmail })
  };
}

type UnivEmailStore = {
  univEmail: string | undefined;
  setUnivEmail: (status: string) => void;
};

const useUnivEmailStore = create<UnivEmailStore>((set) => ({
  univEmail: undefined,
  setUnivEmail: (univEmail) => set({ univEmail })
}));
