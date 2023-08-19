import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import SearchInput from '../../component/Input/SearchInput';
import SelectInput from '../../component/Input/SelectInput';
import { InputBox, InputWrap } from '../../style/input';

const MainPage = () => {
  const { register } = useForm();
  return (
    <>
      <SearchInput id='productId' {...{ register }} search={() => {}} />
      <InputWrap width='300px'>
        <InputBox>
          <SelectInput
            id='category1'
            {...{ register }}
            options={[{ name: '카테고리1', value: 'category1' }]}
          />
        </InputBox>
        <InputBox>
          <SelectInput
            id='category2'
            {...{ register }}
            options={[{ name: '카테고리2', value: 'category2' }]}
          />
        </InputBox>
      </InputWrap>

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

const FlexBox = styled.div`
  display: flex;
`;

export default MainPage;
