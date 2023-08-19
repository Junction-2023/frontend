import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import URL from '../../constant/URL';
import { InputWrap, Select } from '../../style/input';
import mockData from './mock.json';

const ProductPage = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [searchParams] = useSearchParams();
  const productCode = searchParams.get('code');
  const navigate = useNavigate();
  // const { data } = useQuery(['product', productCode]);
  const onSubmit = () => {
    const requestBody = {
      options: [
        {
          optionName: '누적 판매수',
          isActive: getValues('options.option1'),
        },
        {
          optionName: '실시간 조회수',
          isActive: getValues('options.option2'),
        },
        {
          optionName: '별점',
          isActive: getValues('options.option3'),
        },
        {
          optionName: '당일 판매수',
          isActive: getValues('options.option4'),
        },
        {
          optionName: '리뷰 글+날짜+프로필이미지+닉네임',
          isActive: getValues('options.option5'),
        },
        {
          optionName: '누적 리뷰 개수',
          isActive: getValues('options.option6'),
        },
      ],
      displayReviewCount: getValues('displayReviewCount'),
      displayTime: getValues('displayTime'),
    };
    console.log(requestBody);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox>
        <div>
          <h2>
            {mockData.productName} {mockData.productId}
          </h2>
          <h3>노출할 정보</h3>
          <GridBox>
            <label>
              <input type='checkbox' {...register('options.option1')} />
              누적 판매수
            </label>
            <label>
              <input type='checkbox' {...register('options.option2')} />
              실시간 조회수
            </label>
            <label>
              <input type='checkbox' {...register('options.option3')} />
              별점
            </label>
            <label>
              <input type='checkbox' {...register('options.option4')} />
              당일 판매수
            </label>
            <label>
              <input type='checkbox' {...register('options.option5')} />
              리뷰 글+날짜+프로필이미지+닉네임
            </label>
            <label>
              <input type='checkbox' {...register('options.option6')} />
              누적 리뷰 개수
            </label>
          </GridBox>
          <InputWrap>
            <div>
              <h3>노출할 리뷰 개수</h3>
              <Select {...register('displayReviewCount', { valueAsNumber: true })}>
                <option value=''>선택</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </Select>
            </div>
            <div>
              <h3>노출할 시간</h3>
              <Select {...register('displayTime', { valueAsNumber: true })}>
                <option value=''>선택</option>
              </Select>
            </div>
          </InputWrap>
          <h3>리뷰 관리</h3>
          <Button
            size={BUTTON_SIZE.MEDIUM}
            variant={BUTTON_VARIANT.PRIMARY}
            type='button'
            onClick={() => navigate(`${URL.REVIEW_MANAGE}?code=${productCode}`)}
          >
            미노출 리뷰 설정하기
          </Button>
        </div>
        <div>미리보기</div>
      </FlexBox>
      <FixedBox>
        <Button type='submit' size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
          ESL에 반영
        </Button>
      </FixedBox>
    </form>
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
