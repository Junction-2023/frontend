import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import URL from '../../constant/URL';
import { InputWrap, Select } from '../../style/input';
import categoryList from './category.json';
import mockData from './mock.json';

const MainPage = () => {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  // const { data } = useQuery(['products'], getProductList);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TopWrapper>
          <InputWrap>
            <Select
              id='category'
              width='146px'
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
            </Select>
            <Select
              id='subCategory'
              width='200px'
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
              disabled={category === ''}
            >
              <option value=''>선택</option>
              {categoryList
                .find((e) => e.name === category)
                ?.subCategoryList.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
            </Select>
          </InputWrap>
          <SearchInput id='productId' {...{ register }} search={() => {}} width='200px' />
        </TopWrapper>
      </form>
      <Table>
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
            <tr key={id} onClick={() => navigate(`${URL.PRODUCT}?code=${productCode}`)}>
              <td>
                {category} / {subCategory}
              </td>
              <td>{name}</td>
              <td>{productCode}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination total={mockData.totalCount} limit={10} page={page} setPage={setPage} />
    </>
  );
};

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.black};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export default MainPage;
