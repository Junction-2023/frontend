import { useEffect } from 'react';
import styled from 'styled-components';
import star from '../../asset/icon/star.png';
import starFilled from '../../asset/icon/star_filled.png';
import { H4 } from '../../component/Typography/Headline';
import { ReviewSummaryListItem } from '../../types/api';
interface Props {
  productName: string;
  reviewSummaries: ReviewSummaryListItem[];
}

export const ProductReviewSummary = ({ reviewSummaries }: Props) => {
  const score: number =
    Math.floor(
      (reviewSummaries.reduce((prev, curr) => prev + curr.count * curr.rating, 0) /
        reviewSummaries.reduce((prev, curr) => prev + curr.count, 0)) *
        10,
    ) / 10;
  useEffect(() => {
    console.log(score);
  }, [score]);
  return (
    <ReviewSummaryDouble>
      <ReviewSummaryLeft>
        <H4>{score.toFixed(1)}</H4>
        {Array(Math.ceil(score))
          .fill(null)
          .map((e, idx) => (
            <img src={starFilled} key={idx + starFilled} />
          ))}
        {Array(5 - Math.ceil(score))
          .fill(null)
          .map((e, idx) => (
            <img src={star} key={idx + star} />
          ))}
      </ReviewSummaryLeft>
      <ReviewSummaryRight>
        {reviewSummaries.map((e) => (
          <FlexBox>
            {((Math.floor(e.rating) * 10) / 10).toFixed(1)}
            <OuterGage>
              <InnerGage
                style={{
                  // 값을 모르겠음
                  width: `${
                    (e.count * 100) / reviewSummaries.reduce((prev, curr) => prev + curr.count, 0)
                  }px`,
                }}
              />
            </OuterGage>
            {e.count}
          </FlexBox>
        ))}
      </ReviewSummaryRight>
    </ReviewSummaryDouble>
  );
};

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ReviewSummaryDouble = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  background-color: #f0f2f5;
  border-radius: 8px;
  margin: 12px 20px;
`;

const ReviewSummaryLeft = styled.div`
  float: left;
  padding-right: 1.25rem;
  text-align: center;
`;

const ReviewSummaryRight = styled.div`
  float: left;
`;

const OuterGage = styled.div`
  position: relative;
  width: 127px;
  height: 8px;
  background-color: white;
`;

const InnerGage = styled.div`
  position: absolute;
  width: 127px;
  height: 8px;
  background-color: #6143ff;
`;
