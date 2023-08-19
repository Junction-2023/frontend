import styled from 'styled-components';

export const InputWrap = styled.div<{ width?: string }>`
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  align-items: center;
  gap: 0px 4px;
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
`;
