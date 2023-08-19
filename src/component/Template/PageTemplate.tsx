import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

function PageTemplate() {
  return (
    <BodyWrapper>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  width: 1280px;
`;

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.color.offwhite_025};
  height: calc(100vh - 68px);
`;
export default PageTemplate;
