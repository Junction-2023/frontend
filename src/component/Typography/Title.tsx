import styled from 'styled-components';

export const Title1 = (isBold = false) => styled.span`
  font-size: 2rem;
  font-weight: ${isBold ? 700 : 400};
  line-height: 2.75rem;
  letter-spacing: -0.0125rem;
`;

export const Title2 = (isBold = false) => styled.span`
  font-size: 1.625rem;
  font-weight: ${isBold ? 700 : 400};
  line-height: 2.25rem;
  letter-spacing: -0.0125rem;
`;

export const Title3 = (isBold = false) => styled.span`
  font-size: 1.5rem;
  font-weight: ${isBold ? 700 : 400};
  line-height: 2.0625rem;
  letter-spacing: -0.0125rem;
`;

export const Title4 = (isBold = false) => styled.span`
  font-size: 1.25rem;
  font-weight: ${isBold ? 700 : 400};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;

export const Title5 = (isBold = false) => styled.span`
  font-size: 1.125rem;
  font-weight: ${isBold ? 700 : 400};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;
