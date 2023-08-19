import styled from 'styled-components';
import { Caption1 } from '../../component/Typography/Caption';
import { Subtitle1 } from '../../component/Typography/Subtitle';
import { ReviewDetail } from '../../types/api';

interface Params {
  review: ReviewDetail;
}

export const ProductReview = ({ review }: Params) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImgWrapper>
          <StyledImg src={review.profileImageUrl} alt='' />
        </ProfileImgWrapper>
        <DetailWrapper>
          <Subtitle1 $isBold>{review.userName}</Subtitle1>
          <Caption1>{review.reviewDate.join('-')}</Caption1>
        </DetailWrapper>
      </ProfileWrapper>
      <div>{review.content}</div>
      {/* TODO: 별점 추가 필요 */}
      <FlexBox>
        {review.imageUrls.slice(0, 5).map((imageUrl) => {
          return (
            <ProductImgWrapper>
              <StyledImg src={imageUrl} key={imageUrl} />
            </ProductImgWrapper>
          );
        })}
      </FlexBox>
    </Wrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f3f6;
`;

const ProfileImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
`;

const ProductImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 4px;
`;
