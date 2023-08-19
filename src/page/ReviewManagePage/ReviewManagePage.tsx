import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import Checkbox from '../../component/Input/Checkbox';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import ProductDetail from '../../component/ProductDetail';
import { Title2 } from '../../component/Typography/Title';
import { Table } from '../../style/table';
import ReviewRadioSet from './RadioInputSet';
import mockData from './mock.json';

const ReviewManagePage = () => {
  const { register } = useForm();
  const [page, setPage] = useState(1);
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
        <TableWrapper>
          <Table>
            <colgroup>
              <col width='130px' />
              <col width='106px' />
              <col width='125px' />
              <col width='480px' />
              <col width='100px' />
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
              {mockData.reviewList.map(({ visible, id, profileImageUrl, userName, content }) => (
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
                    <div>
                      <Checkbox id={''} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
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

export default ReviewManagePage;
