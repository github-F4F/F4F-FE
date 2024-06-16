import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const btnStyle = css`
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.fonts.Title};
  border-radius: 30px;
  border: 1px solid #d5d5d5;

  cursor: pointer;
`;

export const btnVariant = {
  bgWhite: css`
    color: ${theme.colors.gray02};
    background-color: ${theme.colors.white};
  `,
  bgBlack: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `,
};

export const btnSize = {
  small: css`
    width: 12.9rem;
    height: 2.8rem;
    ${theme.fonts.Detail};
  `,
  large: css`
    width: 39.9rem;
    height: 4.5rem;
    padding-left: 1rem;
    ${theme.fonts.Title}
  `,
};
