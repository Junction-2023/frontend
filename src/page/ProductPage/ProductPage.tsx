import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import SelectInput from '../../component/Input/SelectInput';
import { InputWrap } from '../../style/input';
import mockData from './mock.json';

const ProductPage = () => {
  const { register } = useForm();
  return (
    <>
      <FlexBox>
        <div>
          <h2>
            {mockData.productName} {mockData.productId}
          </h2>
          <h3>노출할 정보</h3>
          <GridBox>
            <label>
              <input type='checkbox' />
              누적 판매수
            </label>
            <label>
              <input type='checkbox' />
              실시간 조회수
            </label>
            <label>
              <input type='checkbox' />
              별점
            </label>
            <label>
              <input type='checkbox' />
              당일 판매수
            </label>
            <label>
              <input type='checkbox' />
              리뷰 글+날짜+프로필이미지+닉네임
            </label>
            <label>
              <input type='checkbox' />
              누적 리뷰 개수
            </label>
          </GridBox>
          <InputWrap>
            <div>
              <h3>노출할 리뷰 개수</h3>
              <SelectInput
                id='reviewCount'
                {...{ register }}
                options={[{ name: '카테고리2', value: 'category2' }]}
              />
            </div>
            <div>
              <h3>노출할 시간</h3>
              <SelectInput
                id='reviewCount'
                {...{ register }}
                options={[{ name: '카테고리2', value: 'category2' }]}
              />
            </div>
          </InputWrap>
          <h3>리뷰 관리</h3>
          <Button size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
            미노출 리뷰 설정하기
          </Button>
        </div>
        <div>미리보기</div>
      </FlexBox>
      <FixedBox>
        <Button size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
          ESL에 반영
        </Button>
      </FixedBox>
    </>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FixedBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px;
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default ProductPage;
