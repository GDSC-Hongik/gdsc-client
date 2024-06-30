import { InputHTMLAttributes, ReactNode } from 'react';
import { Flex } from './Wrapper';
import { color } from 'wowds-tokens';
import styled from '@emotion/styled';
import { CheckIcon } from '../../assets/CheckIcon';

interface CheckboxProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'onClick'> {
  checked: boolean;
  label?: ReactNode;
}

export const Checkbox = ({
  checked,
  onClick,
  label,
  name,
  ...props
}: CheckboxProps) => {
  return (
    <CheckBoxContainer>
      <CheckBox checked={checked} onClick={onClick} {...props}>
        {checked ? <CheckIcon /> : null}
      </CheckBox>
      {label}
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled(Flex)`
  justify-content: flex-start;
  gap: 12px;
`;

const CheckBox = styled(Flex)<{ checked: boolean }>`
  width: 16px;
  height: 16px;

  border: 1px solid ${({ checked }) => (checked ? color.blue100 : color.sub)};
  border-radius: 4px;
  background-color: ${({ checked }) => (checked ? color.blue100 : color.white)};

  cursor: pointer;
`;
