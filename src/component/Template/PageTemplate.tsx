import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function PageTemplate() {
  return (
    <>
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
}

const Wrapper = styled.main`
  width: 1280px;
`;
export default PageTemplate;
