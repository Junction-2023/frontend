import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import Checkbox from '../../component/Input/Checkbox';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import ProductDetail from '../../component/ProductDetail';
import { Title2 } from '../../component/Typography/Title';
import { Select } from '../../style/input';
import { Table } from '../../style/table';
import ReviewRadioSet from './RadioInputSet';
import mockData from './mock.json';
import { useQuery } from 'react-query';
import { getProductDetail, getProductReviews } from '../../api/wrapper';

const ReviewManagePage = () => {
  const { register, watch } = useForm();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const option1 = watch('options.option1');
  const option2 = watch('options.option2');
  const searchKeyword = watch('searchKeyword');
  const filterType = watch('filter');

  const { data } = useQuery(['product', productId], () => {
    return getProductDetail(productId!!);
  });
  const { data: searchData } = useQuery(['productSearchs', productId, option1, option2, searchKeyword, filterType, page], () => {
    console.log(option1);
    console.log(option2);
    return getProductReviews(productId!!, {
      keyword: searchKeyword,
      type: filterType,
      isVisible: option1 === 'on',
      page: page - 1,
      size: 10
    });
  });

  return (
    <>
      <ProductDetail
        name={data?.name ?? ''}
        productCode={data?.productCode ?? ''}
        imgSrc={data?.productImageUrl}
      />
      <TopWrapper>
        <Title2 $isBold>Review Management</Title2>
        <Button size={BUTTON_SIZE.LARGE} variant={BUTTON_VARIANT.PRIMARY}>
          Apply
        </Button>
      </TopWrapper>
      <MainWrapper>
        <FlexBox>
          <ReviewRadioSet register={register}/>
          <SearchWrapper>
            <Select {...register('filter')} width='110px' $isDark={false}>
              {['USERNAME', 'CONTENT'].map((value) => {
                return (
                  <option value={value} key={value}>
                    {value}
                  </option>
                );
              })}
            </Select>
            <SearchInput id='searchKeyword' {...{ register }} search={() => {}} width='800px' />
          </SearchWrapper>
        </FlexBox>
        <TableWrapper>
          <Table>
            <colgroup>
              <col width='130px' />
              <col width='106px' />
              <col width='125px' />
              <col width='764px' />
              <col width='57px' />
            </colgroup>
            <thead>
              <tr>
                <th>Status</th>
                <th>Id</th>
                <th>User Profile</th>
                <th>Contents</th>
                <th>Visibility</th>
              </tr>
            </thead>
            <tbody>
              {searchData?.reviews.map(({id, profileImageUrl, userName, content, reviewDate, visible }) => (
                <tr key={id}>
                  <td>{visible ? 'On' : 'Off'}</td>
                  <td>{id}</td>
                  <td>
                    <ProfileWrapper>
                      <ProfileImgWrapper>
                        <ProfileImg src={profileImageUrl} alt='profile' />
                      </ProfileImgWrapper>
                      <div>{userName}</div>
                    </ProfileWrapper>
                  </td>
                  <td>{content}</td>
                  <td>
                    <CenterDiv>
                      <StyledCheckbox id={''} />
                    </CenterDiv>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
        <Pagination total={searchData?.totalCount ?? 0} limit={10} page={page} setPage={setPage} />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  background-color: #f5f7fa;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px;
  background-color: #f5f7fa;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 28px;
`;

const TableWrapper = styled.div`
  margin: 0 32px;
`;

const ProfileImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const StyledCheckbox = styled(Checkbox)`
  display: block;
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export default ReviewManagePage;
