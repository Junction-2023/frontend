import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import URL from '../../constant/URL';
import { Select } from '../../style/input';
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
          <SelectListWrap>
            <Select
              id='category'
              width='146px'
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value=''>Main Category</option>
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
              <option value=''>Sub Category</option>
              {categoryList
                .find((e) => e.name === category)
                ?.subCategoryList.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
            </Select>
          </SelectListWrap>
          <SearchInput
            id='productId'
            {...{ register }}
            search={() => {}}
            width='740px'
            placeHolder='Search'
          />
        </TopWrapper>
      </form>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Number</th>
            <th>Item</th>
            <th>Price</th>
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
  height: 148px;
  padding: 84px 32px 24px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.black};
`;

const SelectListWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export default MainPage;
