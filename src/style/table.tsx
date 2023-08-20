import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  text-align: left;
  color: ${({ theme }) => theme.color.gray_900};

  & tr {
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray_300}`};
  }

  & th {
    color: ${({ theme }) => theme.color.gray_500};
    background-color: ${({ theme }) => theme.color.offwhite_025};
  }

  & th,
  & td {
    padding: 20px 12px;
  }
`;
