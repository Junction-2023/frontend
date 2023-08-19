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

export const Select = styled.select<{ width?: string }>`
  width: ${(props) => props.width ?? '100%'};
  height: 40px;
  font-size: 1rem;
  padding-right: 22px;
  background-color: ${({ theme }) => theme.color.gray_800};
  color: ${({ theme }) => theme.color.gray_200};
  border-radius: 4px;
  border: 0;

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray_800};
    color: ${({ theme }) => theme.color.gray_650};
  }
`;
