import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export default function useLandingStatus() {
  return {
    landingStatus: useLandingStatusStore.getState().landingStatus,
    updateLandingStatue: (landingStatus: string | null) =>
      useLandingStatusStore.setState({ landingStatus })
  };
}

type LandingStatusStore = {
  landingStatus: string | null;
  setLandingStatus: (status: string) => void;
};

const useLandingStatusStore = create(
  persist<LandingStatusStore>(
    (set) => ({
      landingStatus: null,
      setLandingStatus: (landingStatus) => set({ landingStatus })
    }),
    {
      name: 'landing-status',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
