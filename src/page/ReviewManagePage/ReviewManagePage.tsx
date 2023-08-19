import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import ProductDetail from '../../component/ProductDetail';
import { Title2 } from '../../component/Typography/Title';
import { Table } from '../../style/table';
import ReviewRadioSet from './RadioInputSet';
import mockData from './mock.json';

const ReviewManagePage = () => {
  const { register } = useForm();
  const [page, setPage] = useState(0);
  const data = mockData;
  return (
    <>
      <ProductDetail
        name={'Freshness Guaranteed Mini Chocolate Chip Muffins, 12 Count'}
        productCode={'46921280'}
      />
      <TopWrapper>
        <Title2 $isBold>Review Management</Title2>
        <Button size={BUTTON_SIZE.LARGE} variant={BUTTON_VARIANT.PRIMARY}>
          Apply
        </Button>
      </TopWrapper>
      <MainWrapper>
        <FlexBox>
          <ReviewRadioSet />
          <SearchInput id='searchKeyword' {...{ register }} search={() => {}} width='800px' />
        </FlexBox>
        <Table>
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
            {mockData.reviewList.map(({ isShown, reviewId, profileImageUrl, nickname, review }) => (
              <tr key={reviewId}>
                <td>{isShown}</td>
                <td>{reviewId}</td>
                <td>{profileImageUrl}</td>
                <td>{nickname}</td>
                <td>{review}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination total={mockData.totalCount} limit={10} page={page} setPage={setPage} />
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

export default ReviewManagePage;
