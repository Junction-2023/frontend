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

export const Select = styled.select<{ width?: string; height?: string; $isDark?: boolean }>`
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '40px'};
  font-size: 1rem;
  padding-right: 22px;
  background-color: ${(props) => (props.$isDark ? '#393A40' : 'white')};
  color: ${(props) => (props.$isDark ? '#D1D3D8' : '#212124')};
  border-radius: 4px;
  border: ${(props) => (props.$isDark ? 0 : `1px solid #EAEBEE`)};
  font-size: 14px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:disabled {
    background-color: ${(props) => (props.$isDark ? '#393A40' : 'white')};
    color: ${(props) => (props.$isDark ? '#6D717A' : '#D1D3D8')};
  }

  &::after {
    content: '';
    background: url(downIcon);
  }
`;
