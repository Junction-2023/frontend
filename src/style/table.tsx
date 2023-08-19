import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  & tr {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray_300}`};
  }
`;
