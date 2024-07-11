import styled from '@emotion/styled';
import { color, space } from 'wowds-tokens';
import { motion } from 'framer-motion';
import { useContext, ReactNode, useRef } from 'react';
import { BottomSheetContext } from '@/context/BottomSheetContext';

const BottomSheet = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isOpen, handleBottomSheet } = useContext(BottomSheetContext);
  return (
    <Overlay>
      {isOpen && (
        <Wrapper
          ref={ref}
          initial={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.2 }}
          exit={{ height: 0 }}>
          <BottomSheetActionArea onClick={handleBottomSheet}>
            X
          </BottomSheetActionArea>
          {children}
        </Wrapper>
      )}
    </Overlay>
  );
};

export default BottomSheet;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${color.backgroundDimmer};
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: ${color.backgroundNormal};
  display: flex;
  direction: column;
  padding: 20px 16px 28px 16px;
  gap: ${space.lg};
  border-radius: 8px 8px 0px;
`;

const BottomSheetActionArea = styled.div`
  display: flex;
  direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 20px;
  width: 100%;
`;
