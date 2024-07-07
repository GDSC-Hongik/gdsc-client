import styled from '@emotion/styled';
import { color, space } from 'wowds-tokens';
import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const BottomSheet = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Wrapper
      ref={ref}
      initial={{ height: 0 }}
      transition={{ type: 'spring', duration: 0.2 }}
      exit={{ height: 0 }}>
      <BottomSheetActionArea>X</BottomSheetActionArea>
      {children}
    </Wrapper>
  );
};

export default BottomSheet;

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
