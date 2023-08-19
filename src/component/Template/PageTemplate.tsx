import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

function PageTemplate() {
  return (
    <OuterWrapper>
      <Header />
      <BodyWrapper>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </BodyWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.offwhite_025};
`;

const BodyWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.color.offwhite_025};
  height: calc(100vh - 68px);
`;

export default PageTemplate;
