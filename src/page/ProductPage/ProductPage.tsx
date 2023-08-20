import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getProductDetail, patchProductDetail } from '../../api/wrapper';
import ReviewPreview from '../../asset/image/preview/preview1.png';
import TotalSalesPreview from '../../asset/image/preview/preview2.png';
import TotalAccumulationPreview from '../../asset/image/preview/preview3.png';
import TotalPeoplePreview from '../../asset/image/preview/preview4.png';
import NowWatchingPreview from '../../asset/image/preview/preview5.png';
import AverageStarRating from '../../asset/image/preview/preview6.png';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import Radio from '../../component/Input/Radio';
import ProductDetail from '../../component/ProductDetail';
import { Subtitle1 } from '../../component/Typography/Subtitle';
import { Title4 } from '../../component/Typography/Title';
import { Select } from '../../style/input';
import { color } from '../../style/theme';
import { ProductDetailResponse, ProductDetailUpdateRequest } from '../../types/api';

interface IUpdateProductDetail {
  productId: string;
  data: ProductDetailUpdateRequest;
}

const ProductPage = () => {
  const { register, handleSubmit, watch } = useForm();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  const { data, refetch } = useQuery<ProductDetailResponse>(['product', productId], () =>
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
  const [selectedDisplayOption, setSelectedDisplayOption] = useState<string>(
    data?.displayOptions.find((e) => e.isActive)?.id.toString() ?? '',
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

  const getImgSrc = () => {
    console.log(selectedDisplayOption);
    if (selectedDisplayOption === '0') return TotalSalesPreview;
    else if (selectedDisplayOption === '1') return NowWatchingPreview;
    else if (selectedDisplayOption === '2') return AverageStarRating;
    else if (selectedDisplayOption === '3') return TotalPeoplePreview;
    else if (selectedDisplayOption === '4') return ReviewPreview;
    else return TotalAccumulationPreview;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        const id = (
          document.querySelector('input[name="displayOption"]:checked') as HTMLInputElement
        )?.id
          .split('.')[1]
          .charAt(6);
        setSelectedDisplayOption(id);
      }}
    >
      <FlexBox>
        <div>
          <TopWrapper>
            <ProductDetail
              name={data?.name ?? ''}
              productCode={data?.productCode ?? ''}
              $bgColor={color.offwhite_025}
              imgSrc={data?.productImageUrl}
            />
            <Button type='submit' size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
              Apply
            </Button>
          </TopWrapper>
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
                  name='displayOption'
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
          <PreviewWrapper>
            <img src={getImgSrc()} />
          </PreviewWrapper>
        </RightWrapper>
      </FlexBox>
    </form>
  );
};

const FlexBox = styled.div`
  display: flex;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 35px;
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
  border-left: ${({ theme }) => `1px solid${theme.color.gray_200}`};
  height: calc(100vh - 68px);
  width: 100%;
`;

const PreviewWrapper = styled.div`
  display: flex;
  padding-top: 100px;
  align-items: center;
  margin: 0 auto;
`;

export default ProductPage;
