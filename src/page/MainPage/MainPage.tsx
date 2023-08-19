import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import { InputWrap } from '../../style/input';
import categoryList from './category.json';
import mockData from './mock.json';

const MainPage = () => {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [page, setPage] = useState(0);
  // const { data } = useQuery(['products'], getProductList);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput id='productId' {...{ register }} search={() => {}} />
        <InputWrap width='300px'>
          <select
            id='category'
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value=''>선택</option>
            {categoryList.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <select
            id='subCategory'
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
          >
            <option value=''>선택</option>
            {categoryList
              .find((e) => e.name === category)
              ?.subCategoryList.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </InputWrap>
      </form>
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
          {mockData.products.map(({ id, category, subCategory, name, productCode, price }) => (
            <tr key={id}>
              <td>{category}</td>
              <td>{name}</td>
              <td>{productCode}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination total={mockData.totalCount} limit={10} page={page} setPage={setPage} />
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
