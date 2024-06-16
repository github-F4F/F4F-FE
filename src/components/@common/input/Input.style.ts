import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const inputStyle = css`
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.fonts.Title};
  border: 1px solid ${theme.colors.gray01};
  text-align: center;
`;

export const inputVariant = {
  default: css`
    color: ${theme.colors.gray02};
    background-color: ${theme.colors.white};
  `,
};

export const inputSize = {
  large: css`
    width: 39.9rem;
    height: 4.5rem;
    padding-left: 1rem;
    ${theme.fonts.Title}
  `,
};
