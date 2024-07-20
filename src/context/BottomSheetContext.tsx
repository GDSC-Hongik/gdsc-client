import { createContext } from 'react';

export const BottomSheetContext = createContext({
  isOpen: false,
  handleBottomSheet: () => {}
});
