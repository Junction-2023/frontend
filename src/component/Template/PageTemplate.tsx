import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

function PageTemplate() {
  return (
    <BodyWrapper>
      <Header />
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  width: 1280px;
`;

const Wrapper = styled.main``;
export default PageTemplate;
