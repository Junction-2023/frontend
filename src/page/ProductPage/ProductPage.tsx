import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getProductDetail, patchProductDetail } from '../../api/wrapper';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../component/Button/TextButton';
import { InputWrap, Select } from '../../style/input';
import { ProductDetailUpdateRequest, ProductListItemResponse } from '../../types/api';

interface IUpdateProductDetail {
  productId: string;
  data: ProductDetailUpdateRequest;
}

const ProductPage = () => {
  const { register, handleSubmit, watch } = useForm();
  const [searchParams] = useSearchParams();
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
          <h2>
            {data?.name} {data?.productCode}
          </h2>
          <h3>Display Information</h3>
          <GridBox>
            {data?.displayOptions?.map((option, index) => (
              <label key={index}>
                <input
                  type='checkbox'
                  {...register(`options.option${index}`)}
                  defaultChecked={option.isActive}
                />
                {option.optionName}
              </label>
            ))}
          </GridBox>
          <InputWrap>
            <div>
              <h3>Display Review Count</h3>
              <Select
                {...register('displayReviewCount', { valueAsNumber: true })}
                defaultValue={data?.displayReviewCount}
              >
                {[1, 5, 10].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  );
                })}
              </Select>
            </div>
            <div>
              <h3>Display Time</h3>
              <Select
                {...register('displayTime', { valueAsNumber: true })}
                defaultValue={data?.displayTime}
              >
                {[-1, 5, 10].map((value) => {
                  return (
                    <option value={value} key={value}>
                      {value === -1 ? 'infinity' : value}
                    </option>
                  );
                })}
              </Select>
            </div>
          </InputWrap>
        </div>
        <div>Preview</div>
      </FlexBox>
      <FixedBox>
        <Button type='submit' size={BUTTON_SIZE.MEDIUM} variant={BUTTON_VARIANT.PRIMARY}>
          Apply
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
