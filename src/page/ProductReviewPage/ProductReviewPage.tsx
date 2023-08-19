import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import API_URL from '../../constant/API_URL';
import { getProductReviews, getProductReviewsSummary } from '../../api/wrapper';
import { useProductDetail } from '../../hooks/use-product-detail';
import { ProductReviewSummary } from './ProductReviewSummary';
import { useState } from 'react';
import { ProductReview } from './ProductReview';

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
      <h1>{productData?.name}</h1>
      {reviewSummaryData === undefined ? (
        ''
      ) : (
        <ProductReviewSummary
          productName={reviewSummaryData.productName}
          reviewSummaries={reviewSummaryData.reviewSummaries}
        />
      )}
      <div>Review ({reviewsData?.totalCount})</div>
      <hr></hr>

      {reviewsData?.reviews.map((review) => {
        return <ProductReview review={review} />;
      })}
    </>
  );
};
