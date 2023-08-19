import styled from 'styled-components';

export const Subtitle1 = styled.span<{ $isBold: boolean }>`
  font-size: 1rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 500)};
  line-height: 1.375rem;
  letter-spacing: -0.0125rem;
`;

export const Subtitle2 = styled.span<{ $isBold: boolean }>`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$isBold ? 700 : 500)};
  line-height: 1.25rem;
  letter-spacing: -0.0125rem;
`;
