import { styled } from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Logo</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 68px;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
`;

export default Header;
