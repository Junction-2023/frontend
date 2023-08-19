import styled from 'styled-components';

export const Subtitle1 = (isBold = false) => styled.span`
  font-size: 1rem;
  font-weight: ${isBold ? 700 : 500};
  line-height: 1.375rem;
  letter-spacing: -0.0125rem;
`;

export const Subtitle2 = (isBold = false) => styled.span`
  font-size: 0.875rem;
  font-weight: ${isBold ? 700 : 500};
  line-height: 1.25rem;
  letter-spacing: -0.0125rem;
`;
