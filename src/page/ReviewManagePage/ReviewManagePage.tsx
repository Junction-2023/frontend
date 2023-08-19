import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
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
import { useMutation, useQuery } from 'react-query';
import { ReviewUpdateRequest } from '../../types/api';
import { getProductDetail, getProductReviews, patchProductReview } from '../../api/wrapper';

interface IUpdateProductReview {
  productId: string;
  data: ReviewUpdateRequest;
}

const ReviewManagePage = () => {
  const { register, watch, handleSubmit } = useForm();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const option = watch('options');
  const searchKeyword = watch('searchKeyword');
  const filterType = watch('filter');

  const { data } = useQuery(['product', productId], () => {
    return getProductDetail(productId!!);
  });

  const { data: searchData, refetch } = useQuery(['productSearchs', productId, option, searchKeyword, filterType, page], () => {
    return getProductReviews(productId!!, {
      keyword: searchKeyword,
      type: filterType,
      isVisible: option === 'option1',
      page: page - 1,
      size: 10
    });
  });

  const { mutate } = useMutation(
    ({ productId, data }: IUpdateProductReview) => {
      return patchProductReview(productId, data);
    },
    {
      onSuccess: () => {
        refetch();
      }
    }
  );

  const onSubmit = async (data: FieldValues) => {
    const ids = data.checkBox.filter((value: string | boolean) => {
      return value !== false && typeof value === 'string';
    }).map((value: string) => {return parseInt(value.split('.')[1]);})

    mutate({ productId: productId!!, data: { reviewIds: ids ?? [] } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              {searchData?.reviews.map(({id, profileImageUrl, userName, content, visible }) => (
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
                      <StyledCheckbox id={`checkBox.${id}`} register={register}/>
                    </CenterDiv>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
        <Pagination total={searchData?.totalCount ?? 0} limit={10} page={page} setPage={setPage} />
      </MainWrapper>
    </form>
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
