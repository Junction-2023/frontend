import { styled } from 'styled-components';
import { color } from '../../style/theme';

interface ButtonProps {
  size: ButtonSize;
  variant: ButtonTheme;
}

export const BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  BLACK: 'black',
  TERTIARY: 'tertiary',
  OUTLINED: 'outlined',
} as const;

export type ButtonTheme = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

const sizes = {
  [BUTTON_SIZE.LARGE]: {
    width: '12.5rem',
    height: '3.5rem',
    padding: '1rem 2.5rem',
    fontSize: '1rem',
  },
  [BUTTON_SIZE.MEDIUM]: {
    width: '10rem',
    height: '3rem',
    padding: '0.75rem 2.25rem',
    fontSize: '0.875rem',
  },
  [BUTTON_SIZE.SMALL]: {
    width: '5.75rem',
    height: '2.125rem',
    padding: '0.5rem 1rem',
    fontSize: '0.75rem',
  },
};

const variants = {
  [BUTTON_VARIANT.PRIMARY]: {
    default: {
      color: color.white,
      backgroundColor: color.primary_400,
      border: 0,
    },
    hover: {
      color: color.white,
      backgroundColor: color.primary_500,
      border: 0,
    },
    active: {
      color: color.white,
      backgroundColor: color.primary_600,
      border: 0,
    },
    disabled: {
      color: color.gray_500,
      backgroundColor: color.gray_200,
      border: 0,
    },
  },
  [BUTTON_VARIANT.BLACK]: {
    default: {
      color: color.white,
      backgroundColor: color.gray_800,
      border: 0,
    },
    hover: {
      color: color.white,
      backgroundColor: color.gray_900,
      border: 0,
    },
    active: {
      color: color.white,
      backgroundColor: color.black,
      border: 0,
    },
    disabled: {
      color: color.gray_500,
      backgroundColor: color.gray_200,
      border: 0,
    },
  },
  [BUTTON_VARIANT.TERTIARY]: {
    default: {
      color: color.gray_900,
      backgroundColor: color.gray_100,
      border: 0,
    },
    hover: {
      color: color.gray_900,
      backgroundColor: color.gray_300,
      border: 0,
    },
    active: {
      color: color.gray_900,
      backgroundColor: color.gray_400,
      border: 0,
    },
    disabled: {
      color: color.gray_500,
      backgroundColor: color.gray_200,
      border: 0,
    },
  },
  [BUTTON_VARIANT.OUTLINED]: {
    default: {
      color: color.gray_900,
      backgroundColor: color.white,
      border: `1px solid ${color.gray_200}`,
    },
    hover: {
      color: color.gray_900,
      backgroundColor: color.gray_50,
      border: `1px solid ${color.gray_200}`,
    },
    active: {
      color: color.gray_900,
      backgroundColor: color.gray_100,
      border: `1px solid ${color.gray_200}`,
    },
    disabled: {
      color: color.gray_500,
      backgroundColor: color.gray_200,
      border: `1px solid ${color.gray_300}`,
    },
  },
};

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  font-weight: 500;
  line-height: '150%';
  width: ${({ size }: ButtonProps) => `${sizes[size].width}`};
  height: ${({ size }: ButtonProps) => `${sizes[size].height}`};
  padding: ${({ size }: ButtonProps) => `${sizes[size].padding}`};
  font-size: ${({ size }: ButtonProps) => `${sizes[size].fontSize}`};
  background-color: ${({ variant }: ButtonProps) => `${variants[variant].default.backgroundColor}`};
  color: ${({ variant }: ButtonProps) => `${variants[variant].default.color}`};
  border: ${({ variant }: ButtonProps) => `${variants[variant].default.border}`};

  &:hover {
    background-color: ${({ variant }: ButtonProps) => `${variants[variant].hover.backgroundColor}`};
    color: ${({ variant }: ButtonProps) => `${variants[variant].hover.color}`};
    border: ${({ variant }: ButtonProps) => `${variants[variant].hover.border}`};
  }

  &:active {
    background-color: ${({ variant }: ButtonProps) =>
      `${variants[variant].active.backgroundColor}`};
    color: ${({ variant }: ButtonProps) => `${variants[variant].active.color}`};
    border: ${({ variant }: ButtonProps) => `${variants[variant].active.border}`};
  }

  &:disabled {
    background-color: ${({ variant }: ButtonProps) =>
      `${variants[variant].disabled.backgroundColor}`};
    color: ${({ variant }: ButtonProps) => `${variants[variant].disabled.color}`};
    border: ${({ variant }: ButtonProps) => `${variants[variant].disabled.border}`};
  }
`;
