import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ total, limit, page, setPage }: PaginationProps) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <ArrowButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </ArrowButton>
        {Array(numPages)
          .fill(null)
          .map((_, i) => (
            <PageButton
              type='button'
              key={i + 1}
              onClick={() => setPage(i + 1)}
              $isActive={i + 1 === page}
            >
              {i + 1}
            </PageButton>
          ))}
        <ArrowButton onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </ArrowButton>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 16px;
`;

const ArrowButton = styled.button`
  padding: 4px;
  color: ${({ theme }) => theme.color.gray_700};
`;

const PageButton = styled.button<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? '#212124' : '#4D5159')};
  font-weight: ${(props) => (props.$isActive ? 700 : 500)};
  font-size: 14px;
`;

export default Pagination;
