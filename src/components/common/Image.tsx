import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  align?: 'left' | 'center' | 'right';
  css?: ReturnType<typeof css>;
}

export const Image = ({ align = 'center', css, ...props }: ImageProps) => {
  return <StyledImg align={align} css={css} {...props} />;
};

const StyledImg = styled.img<{
  align?: 'left' | 'center' | 'right';
  css?: ReturnType<typeof css>;
}>`
  display: block;
  margin-left: ${({ align }) =>
    align === 'left' ? '0' : align === 'center' ? 'auto' : 'auto'};
  margin-right: ${({ align }) =>
    align === 'left' ? 'auto' : align === 'center' ? 'auto' : '0'};

  ${({ css }) => css};
`;
