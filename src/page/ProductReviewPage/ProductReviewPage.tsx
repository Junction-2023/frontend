import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductReviews, getProductReviewsSummary } from '../../api/wrapper';
import { Subtitle1 } from '../../component/Typography/Subtitle';
import { Title3 } from '../../component/Typography/Title';
import API_URL from '../../constant/API_URL';
import { useProductDetail } from '../../hooks/use-product-detail';
import { ProductReview } from './ProductReview';
import { ProductReviewSummary } from './ProductReviewSummary';

export const ProductReviewPage = () => {
  const { productId } = useParams();

  if (productId === undefined) {
    return null;
  }

  const [reviewListRequest, setReviewListRequest] = useState({
    keyword: '',
    size: 10,
    isVisible: true,
  });

  const { data: productData } = useProductDetail(productId);
  const { data: reviewSummaryData } = useQuery([API_URL.PRODUCT_REVIEWS_SUMMARY(productId)], () =>
    getProductReviewsSummary(productId),
  );
  const { data: reviewsData } = useQuery([API_URL.PRODUCT_REVIEWS(productId)], () =>
    getProductReviews(productId, reviewListRequest),
  );

  if (productData === undefined) {
    return null;
  }

  return (
    <>
      <HeadWrap>
        <Title3 $isBold>{productData?.name}</Title3>
      </HeadWrap>
      {reviewSummaryData === undefined ? (
        ''
      ) : (
        <ProductReviewSummary
          productName={reviewSummaryData.productName}
          reviewSummaries={reviewSummaryData.reviewSummaries}
        />
      )}
      <ReviewTitle>
        <Subtitle1 $isBold>
          Review <GrayText>({reviewsData?.totalCount})</GrayText>
        </Subtitle1>
      </ReviewTitle>

      <ReviewWrap>
        {reviewsData?.reviews.map((review) => {
          return <ProductReview review={review} key={review.id} />;
        })}
      </ReviewWrap>
    </>
  );
};

const HeadWrap = styled.div`
  padding: 32px 20px 0px;
`;

const GrayText = styled.span`
  color: #adb1ba;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.2px;
`;

const ReviewTitle = styled.div`
  margin-left: 20px;
`;

const ReviewWrap = styled.div`
  margin: 0 0 28px 20px;
`;
