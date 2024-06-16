import { css } from '@emotion/react';

const colors = {
  black: '#000000',
  white: '#ffffff',
  gray01: '#D5D5D5',
  gray02: '#666666',
} as const;

const fonts = {
  Title: css`
    font-family: 'Noto Sans';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 136.241%;
    letter-spacing: -0.6px;
  `,
} as const;

const theme = { colors, fonts };

export default theme;
