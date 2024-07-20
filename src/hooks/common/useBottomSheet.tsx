import BottomSheet from '@/components/common/BottomSheet';
import { useContext, ReactNode } from 'react';
import { BottomSheetContext } from '@/context/BottomSheetContext';

const useBottomSheet = () => {
  const { isOpen, handleBottomSheet } = useContext(BottomSheetContext);

  const BottomSheetElement = ({ children }: { children: ReactNode }) => {
    return <BottomSheet>{children}</BottomSheet>;
  };
  return { isOpen, BottomSheetElement, handleBottomSheet };
};

export default useBottomSheet;
