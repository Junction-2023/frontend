import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getCategories, getProductList } from '../../api/wrapper';
import star from '../../asset/icon/star_filled.png';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import API_URL from '../../constant/API_URL';
import URL from '../../constant/URL';
import { Select } from '../../style/input';
import { Table } from '../../style/table';
const MainPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [productListRequest, setProductListRequest] = useState({
    category: '',
    subCategory: '',
    searchKeyword: '',
    page: 1,
    size: 10,
  });

  const { data: categoryData } = useQuery([API_URL.CATEGORIES], getCategories);
  const { data: productsData, refetch } = useQuery(['products', productListRequest], () =>
    getProductList({
      ...productListRequest,
      searchKeyword:
        productListRequest.searchKeyword === '' ? undefined : productListRequest.searchKeyword,
      category: productListRequest.category === '' ? undefined : productListRequest.category,
      subCategory:
        productListRequest.subCategory === '' ? undefined : productListRequest.subCategory,
    }),
  );

  const { products, totalCount } = productsData ?? { products: [], totalCount: 0 };

  const onSelectCategory = (value: string) => {
    setProductListRequest({ ...productListRequest, category: value, subCategory: '' });
    refetch();
  };
  const onSelectSubCategory = (value: string) => {
    setProductListRequest({ ...productListRequest, subCategory: value });
    refetch();
  };

  const onSubmit = (data: any) => {
    const { searchKeyword } = data;
    setProductListRequest({ ...productListRequest, searchKeyword });
    refetch();
  };

  const tableTitles = ['Category', 'Product Number', 'Item', 'Price', 'Review', 'Action'];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TopWrapper>
          <SelectListWrap>
            <Select
              id='category'
              width='146px'
              onChange={(e) => {
                onSelectCategory(e.target.value);
              }}
            >
              <option value=''>Main Category</option>
              {categoryData?.map(({ category }) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <Select
              id='subCategory'
              width='200px'
              onChange={(e) => {
                onSelectSubCategory(e.target.value);
              }}
              disabled={productListRequest.category === ''}
            >
              <option value=''>Sub Category</option>
              {categoryData
                ?.find((e) => e.category === productListRequest.category)
                ?.subCategories.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
            </Select>
          </SelectListWrap>
          <SearchInput
            id='searchKeyword'
            {...{ register }}
            search={() => {}}
            width='740px'
            $isDark
          />
        </TopWrapper>
      </form>
      <TableWrapper>
        <Table>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              {tableTitles.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({
                id: productId,
                category,
                subCategory,
                name,
                productCode,
                price,
                accumulatedReviews,
                averageStarRating,
                productImageUrl,
              }) => (
                <tr key={productId}>
                  <td>
                    {category} / {subCategory}
                  </td>
                  <td>{productCode}</td>
                  <td>
                    <ProfileWrapper>
                      <ProfileImgWrapper>
                        <StyledImg src={productImageUrl} alt='' />
                      </ProfileImgWrapper>
                      <DetailWrapper>
                        <div>{name}</div>
                      </DetailWrapper>
                    </ProfileWrapper>
                  </td>
                  <td>{price}</td>
                  {accumulatedReviews === undefined ? (
                    <td></td>
                  ) : (
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '2px',
                        }}
                      >
                        <img src={star} />
                        {(Math.floor(averageStarRating * 10) / 10).toFixed(1)}({accumulatedReviews}{' '}
                        reviews)
                      </div>
                    </td>
                  )}
                  <td>
                    <ButtonWrapper>
                      <Button
                        size={BUTTON_SIZE.ICON}
                        variant={BUTTON_VARIANT.TERTIARY}
                        type='button'
                        onClick={() => navigate(`${URL.PRODUCT}?id=${productId}`)}
                        title='review'
                      >
                        <ReviewSVG />
                      </Button>
                      <Button
                        size={BUTTON_SIZE.ICON}
                        variant={BUTTON_VARIANT.TERTIARY}
                        type='button'
                        onClick={() => navigate(`${URL.REVIEW_MANAGE}?id=${productId}`)}
                        title='layout'
                      >
                        <LayoutSVG />
                      </Button>
                    </ButtonWrapper>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </Table>
      </TableWrapper>
      <Pagination
        total={totalCount}
        limit={10}
        page={productListRequest.page}
        setPage={(page) => setProductListRequest({ ...productListRequest, page: Number(page) })}
      />
    </>
  );
};

const TopWrapper = styled.div`
  display: flex;
  padding: 0 32px 24px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.black};
`;

const SelectListWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export default MainPage;

const ReviewSVG = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path
      d='M13.9928 0.3082C14.1902 0.110859 14.4579 0 14.737 0C15.0161 0 15.2838 0.110859 15.4812 0.3082L19.6918 4.51877C19.8891 4.71617 20 4.98387 20 5.26299C20 5.54212 19.8891 5.80981 19.6918 6.00721L6.00744 19.6916C5.81007 19.889 5.54237 19.9999 5.26322 20H1.05264C0.773465 20 0.505721 19.8891 0.308312 19.6917C0.110903 19.4943 0 19.2265 0 18.9474V14.7368C5.9619e-05 14.4576 0.111002 14.1899 0.308425 13.9926L10.8349 3.46613L13.9928 0.3082ZM11.5791 5.69879L2.10529 15.1726V17.8947H4.82742L14.3012 8.42092L11.5791 5.69879ZM15.7897 6.93249L17.4591 5.26299L14.737 2.54086L13.0675 4.21035L15.7897 6.93249Z'
      fill='#4D5159'
    />
  </svg>
);

const LayoutSVG = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path
      d='M7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55229 1.44772 8 2 8H7C7.55229 8 8 7.55229 8 7V2C8 1.44772 7.55229 1 7 1Z'
      stroke='#4D5159'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 1H13C12.4477 1 12 1.44772 12 2V7C12 7.55229 12.4477 8 13 8H18C18.5523 8 19 7.55229 19 7V2C19 1.44772 18.5523 1 18 1Z'
      stroke='#4D5159'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 12.0002H13C12.4477 12.0002 12 12.448 12 13.0002V18.0002C12 18.5525 12.4477 19.0002 13 19.0002H18C18.5523 19.0002 19 18.5525 19 18.0002V13.0002C19 12.448 18.5523 12.0002 18 12.0002Z'
      stroke='#4D5159'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 12.0002H2C1.44772 12.0002 1 12.448 1 13.0002V18.0002C1 18.5525 1.44772 19.0002 2 19.0002H7C7.55229 19.0002 8 18.5525 8 18.0002V13.0002C8 12.448 7.55229 12.0002 7 12.0002Z'
      stroke='#4D5159'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const TableWrapper = styled.div`
  margin: 0 32px;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const ProfileImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
