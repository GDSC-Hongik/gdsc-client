import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

//TODO: 추후 삭제 필요
export default function useLandingStatus() {
  return {
    landingStatus: useLandingStatusStore.getState().landingStatus,
    updateLandingStatue: (landingStatus: string | null) =>
      useLandingStatusStore.setState({ landingStatus }),
    clearLandingStatus: () =>
      useLandingStatusStore.setState({ landingStatus: null })
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
