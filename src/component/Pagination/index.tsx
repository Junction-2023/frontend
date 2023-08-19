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
            <button type='button' key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
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
  gap: 4px;
  margin: 16px;
`;

const ArrowButton = styled.button`
  padding: 4px;
  background: #000;
  color: #fff;
  font-size: 1rem;
`;

export default Pagination;
