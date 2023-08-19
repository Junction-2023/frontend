import styled from 'styled-components';

export const InputWrap = styled.div<{ width?: string }>`
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  align-items: center;
  gap: 0px 4px;
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Select = styled.select<{ width?: string; $isDark?: boolean }>`
  width: ${(props) => props.width ?? '100%'};
  height: 40px;
  font-size: 1rem;
  padding-right: 22px;
  background-color: ${(props) => (props.$isDark ? '#393A40' : 'white')};
  color: ${(props) => (props.$isDark ? '#D1D3D8' : '#212124')};
  border-radius: 4px;
  border: ${(props) => (props.$isDark ? 0 : `1px solid #EAEBEE`)};
  font-size: 14px;

  &:disabled {
    background-color: ${(props) => (props.$isDark ? '#393A40' : 'white')};
    color: ${(props) => (props.$isDark ? '#6D717A' : '#D1D3D8')};
  }
`;
