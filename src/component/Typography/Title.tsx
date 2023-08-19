import styled from 'styled-components';

export const Title1 = styled.span<{ $isBold: boolean }>`
  font-size: 2rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  line-height: 2.75rem;
  letter-spacing: -0.0125rem;
`;

export const Title2 = styled.span<{ $isBold: boolean }>`
  font-size: 1.625rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  line-height: 2.25rem;
  letter-spacing: -0.0125rem;
`;

export const Title3 = styled.span<{ $isBold: boolean }>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  line-height: 2.0625rem;
  letter-spacing: -0.0125rem;
`;

export const Title4 = styled.span<{ $isBold: boolean }>`
  font-size: 1.25rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;

export const Title5 = styled.span<{ $isBold: boolean }>`
  font-size: 1.125rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 400)};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;
