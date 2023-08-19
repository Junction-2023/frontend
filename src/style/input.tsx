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
export const InputBox = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? '100%'};
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      appearance: textfield;
      -moz-appearance: textfield;
    }

    &[type='hidden'] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
  }
`;
