import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import { InputBox } from '../../style/input';

const MainPage = () => {
  return (
    <>
      <InputBox>
        <input type='text' />
      </InputBox>
      <Text>안녕하세요</Text>
      <Button size={BUTTON_SIZE.LARGE} variant={BUTTON_VARIANT.OUTLINED}>
        안녕
      </Button>
    </>
  );
};

const Text = styled.p`
  color: ${({ theme }) => theme.color.gray_50};
`;

export default MainPage;
