import styled from 'styled-components';
import searchIcon20 from '../asset/icon/search_icon_black.png';
import selectIcon20 from '../asset/icon/select_icon_20.png';

export const InputWrap = styled.div<{ width?: string }>`
  display: flex;
  width: ${({ width }) => (width ? `${width} !important` : '100%')};
  flex-wrap: wrap;
  align-items: center;
  gap: 0px 4px;
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
`;
export const InputBox = styled.div<{ width?: string }>`
  position: relative;
  float: left;
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  box-sizing: border-box;
  margin: 2px 0px;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.gray2};
    border-radius: 2px;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
  }

  &:after {
    content: none;
    position: absolute;
    top: 2px;
    left: 2px;
    border-top: 4px solid ${({ theme }) => theme.primary3};
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid ${({ theme }) => theme.primary3};
  }

  input,
  textarea {
    width: 100%;
    height: 20px;
    font-size: 1.3rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.black};
    padding: 1px 6px 0px;
    box-sizing: border-box;

    &:not(.bg-white):read-only,
    &:disabled {
      background-color: ${({ theme }) => theme.gray1_5};
    }

    &:read-only,
    &:disabled {
      cursor: default;
    }

    &.has-click-handler:read-only {
      cursor: pointer;
    }

    /* placeholder */
    &:-moz-placeholder,
    &:-ms-input-placeholder,
    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.gray3};
    }

    /* remove number arrow */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      /* Firefox */
      appearance: textfield;
      -moz-appearance: textfield;
    }

    /* hidden */
    &[type='hidden'] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
  }

  .search-icon-button {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    background-color: #fff;
    background-image: url(${searchIcon20});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 2px;

    :disabled {
      cursor: default;
      background-color: ${({ theme }) => theme.gray1_5};
    }
  }
`;
export const Select = styled.select`
  position: relative;
  width: 100%;
  font-size: 1.3rem;
  line-height: 2rem;
  padding-left: 6px;
  padding-right: 22px;
  box-sizing: border-box;
  background-image: url(${selectIcon20});
  background-repeat: no-repeat;
  background-position: right 2px center;

  &:-moz-placeholder,
  &:-ms-input-placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.gray3};
  }

  border: 1px solid ${({ theme }) => theme.gray2};
  border-radius: 2px;
`;
