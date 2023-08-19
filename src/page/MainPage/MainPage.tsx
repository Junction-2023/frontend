import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import SearchInput from '../../component/Input/SearchInput';
import SelectInput from '../../component/Input/SelectInput';
import { InputWrap } from '../../style/input';
import mockData from './mock.json';

const MainPage = () => {
  const { register } = useForm();
  return (
    <>
      <SearchInput id='productId' {...{ register }} search={() => {}} />
      <InputWrap width='300px'>
        <SelectInput
          id='category1'
          {...{ register }}
          options={[{ name: '카테고리1', value: 'category1' }]}
        />
        <SelectInput
          id='category2'
          {...{ register }}
          options={[{ name: '카테고리2', value: 'category2' }]}
        />
      </InputWrap>

      <table>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>상품명</th>
            <th>상품번호</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(({ category, productName, productId, price }) => (
            <tr key={productId}>
              <td>{category}</td>
              <td>{productName}</td>
              <td>{productId}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
