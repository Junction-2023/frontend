import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getProductDetail, patchProductDetail } from '../../api/wrapper';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import Radio from '../../component/Input/Radio';
import ProductDetail from '../../component/ProductDetail';
import { Subtitle1 } from '../../component/Typography/Subtitle';
import { Title4 } from '../../component/Typography/Title';
import { Select } from '../../style/input';
import { color } from '../../style/theme';
import { ProductDetailUpdateRequest, ProductListItemResponse } from '../../types/api';
import Preview1 from './Preview/Preview1';

interface IUpdateProductDetail {
  productId: string;
  data: ProductDetailUpdateRequest;
}

const ProductPage = () => {
  const { register, handleSubmit, watch } = useForm();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('id');
  const { data, refetch } = useQuery<ProductListItemResponse>(['product', productId], () =>
    getProductDetail(productId!!),
  );
  const { mutate } = useMutation(
    ({ productId, data }: IUpdateProductDetail) => {
      return patchProductDetail(productId, data);
    },
    {
      onSuccess: () => {
        refetch();
      },
    },
  );

  const onSubmit = async () => {
    const requestBody = {
      selectedOptionIds:
        data?.displayOptions
          ?.filter((_, index) => watch(`options.option${index}`))
          .map((option) => option.id) ?? [],
      displayReviewCount: watch('displayReviewCount'),
      displayTime: watch('displayTime'),
    };
    mutate({ productId: productId!!, data: requestBody });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox>
        <div>
          <ProductDetail
            name={data?.name ?? ''}
            productCode={data?.productCode ?? ''}
            $bgColor={color.offwhite_025}
          />
          <Button type='submit' size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
            Apply
          </Button>
          <InnerWrap>
            <Subtitle1 $isBold>Display Information</Subtitle1>
            <GridBox>
              {data?.displayOptions?.map((option, index) => (
                <Radio
                  label={option.optionName}
                  id={`options.option${index}`}
                  key={option.id}
                  register={register}
                  defaultChecked={option.isActive}
                />
              ))}
            </GridBox>
          </InnerWrap>
          <InnerWrap>
            <InputWrap>
              <ColumnBox>
                <StyledSubTitle1 $isBold>Display Review Count</StyledSubTitle1>
                <Select
                  {...register('displayReviewCount', { valueAsNumber: true })}
                  defaultValue={data?.displayReviewCount}
                  width='364px'
                >
                  {[1, 5, 10].map((value) => {
                    return (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    );
                  })}
                </Select>
              </ColumnBox>
              <ColumnBox>
                <StyledSubTitle1 $isBold>Display Time</StyledSubTitle1>
                <Select
                  {...register('displayTime', { valueAsNumber: true })}
                  defaultValue={data?.displayTime}
                  width='364px'
                >
                  {[-1, 5, 10].map((value) => {
                    return (
                      <option value={value} key={value}>
                        {value === -1 ? 'infinity' : value}
                      </option>
                    );
                  })}
                </Select>
              </ColumnBox>
            </InputWrap>
          </InnerWrap>
        </div>
        <RightWrapper>
          <Title4 $isBold>Preview</Title4>
          <div>
            <Preview1 />
          </div>
        </RightWrapper>
      </FlexBox>
    </form>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 24px;
`;

const InnerWrap = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 28px;
  border-radius: 4px;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSubTitle1 = styled(Subtitle1)`
  margin-bottom: 8px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 40px 0 40px;
  background-color: #eaebee;
  height: calc(100vh - 68px);
`;

export default ProductPage;
