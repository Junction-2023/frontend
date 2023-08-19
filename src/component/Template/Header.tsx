import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import logoSrc from '../../asset/image/logo.png';
import URL from '../../constant/URL';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1>
        <a onClick={() => navigate(URL.MAIN)} style={{ cursor: 'pointer' }}>
          <img src={logoSrc} width='200px' />
        </a>
      </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 1280px;
  height: 68px;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
  padding: 12px 32px;
`;

export default Header;
