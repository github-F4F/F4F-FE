import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const HomePageWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});

export const LoginContainer = css({
  display: 'flex',
  flexDirection: 'column',
  width: '43.2rem',
  height: '20rem',
  borderRadius: '1.2rem',
  marginTop: '4.5rem',
  marginBottom: '4.5rem',
  border: `0.1rem solid ${theme.colors.gray01}`,
  background: `${theme.colors.white}`,
});

export const ButtonWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  marginLeft: '1.3rem',
  marginTop: '1rem',
});

export const SubText = css({
  color: `${theme.colors.gray02}`,
  textAlign: 'center',
  fontFamily: 'Noto Sans',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '136.241%',
  letterSpacing: '-0.3px',
});

export const SubTextWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1.4rem',
});
