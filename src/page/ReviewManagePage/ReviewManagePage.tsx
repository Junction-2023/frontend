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
    <PageWrapper>
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
      <FlexBox>
        <ReviewRadioSet />
        <SearchInput id='searchKeyword' {...{ register }} search={() => {}} width='800px' />
      </FlexBox>

      <Table>
        <thead>
          <tr>
            <th>노출 여부</th>
            <th>리뷰 아이디</th>
            <th>유저 프로필</th>
            <th>닉네임</th>
            <th>리뷰 내용</th>
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
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: '#f5f7fa';
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 28px;
`;

export default ReviewManagePage;
