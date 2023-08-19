import styled from 'styled-components';
import { ReviewSummaryListItem } from '../../types/api';

interface Props {
  productName: string;
  reviewSummaries: ReviewSummaryListItem[];
}

export const ProductReviewSummary = ({ reviewSummaries }: Props) => {
  return (
    <ReviewSummaryDouble>
      <ReviewSummaryLeft>
        {(
          Math.floor(
            (reviewSummaries.reduce((prev, curr) => prev + curr.count * curr.rating, 0) /
              reviewSummaries.reduce((prev, curr) => prev + curr.count, 0)) *
              10,
          ) / 10
        ).toFixed(1)}
      </ReviewSummaryLeft>
      <ReviewSummaryRight>
        {reviewSummaries.map((e) => (
          <div>
            {((Math.floor(e.rating) * 10) / 10).toFixed(1)} 여기 대충 게이지 {e.count}
          </div>
        ))}
      </ReviewSummaryRight>
    </ReviewSummaryDouble>
  );
};

const ReviewSummaryDouble = styled.div`
  padding: 1rem;
  overflow: hidden;
`;

const ReviewSummaryLeft = styled.div`
  float: left;
  padding-right: 1.25rem;
`;

const ReviewSummaryRight = styled.div`
  float: left;
`;
