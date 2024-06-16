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
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 136.241%;
    letter-spacing: -0.6px;
  `,
  body01: css`
    font-family: 'GmarketSans';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100.03%; /* 16.005px */
    letter-spacing: -1.28px;
  `,
  body02: css`
    font-family: 'GmarketSans';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 136.241%; /* 16.349px */
    letter-spacing: -0.36px;
  `,
  body03: css`
    font-family: 'GmarketSans';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100.03%; /* 16.005px */
    letter-spacing: -1.28px;
  Detail: css`
    font-family: 'Noto Sans';
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 136.241%;
    letter-spacing: -0.27px;
  `,
} as const;

const theme = { colors, fonts };

export default theme;
