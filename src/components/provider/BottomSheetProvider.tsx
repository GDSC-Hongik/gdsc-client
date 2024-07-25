import { BottomSheetContext } from '@/context/BottomSheetContext';
import { ReactNode, useCallback, useState } from 'react';

const BottomSheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBottomSheet = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <BottomSheetContext.Provider value={{ isOpen, handleBottomSheet }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export default BottomSheetProvider;
