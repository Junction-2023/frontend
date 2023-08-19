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

export const Select = styled.select`
  width: 100%;
  height: 20px;
  font-size: 1rem;
  padding: 0 22px 0 6px;

  &:not(:has(option:checked)) {
    color: ${({ theme }) => theme.gray3};
  }
  option {
    color: ${({ theme }) => theme.black};
  }
`;
