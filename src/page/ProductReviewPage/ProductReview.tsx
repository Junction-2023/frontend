import { ReviewDetail } from '../../types/api';

interface Params {
  review: ReviewDetail;
}

export const ProductReview = ({ review }: Params) => {
  return (
    <div>
      <div>{review.profileImageUrl}</div>
      <div>{review.userName}</div>
      {/* TODO: 별점 추가 필요 */}
      <div>별점 {review.reviewDate}</div>
      <div>{review.content}</div>

      <div>
        {review.imageUrls.map((imageUrl) => {
          return <img src={imageUrl}></img>;
        })}
      </div>
      <hr></hr>
    </div>
  );
};
