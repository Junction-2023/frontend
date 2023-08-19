import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import SearchInput from '../../component/Input/SearchInput';
import Pagination from '../../component/Pagination';
import { InputWrap, Select } from '../../style/input';
import mockData from './mock.json';

const ReviewManagePage = () => {
  const { register } = useForm();
  const [page, setPage] = useState(0);
  return (
    <>
      <h2>리뷰 관리</h2>
      <FlexBox>
        <p>노출하지 않을 리뷰를 선택해주세요</p>
        <Button size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.OUTLINED}>
          반영하기
        </Button>
      </FlexBox>
      <InputWrap>
        <Select>
          <option value=''>선택</option>
          {['카테고리1'].map((e) => (
            <option value={e}>{e}</option>
          ))}
        </Select>
        <Select>
          <option value=''>선택</option>
          {['카테고리1'].map((e) => (
            <option value={e}>{e}</option>
          ))}
        </Select>
        <SearchInput id='productId' {...{ register }} search={() => {}} />
      </InputWrap>

      <table>
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
      </table>
      <Pagination total={mockData.totalCount} limit={10} page={page} setPage={setPage} />
    </>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

export default ReviewManagePage;
