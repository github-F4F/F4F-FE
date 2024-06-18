import { css } from '@emotion/react';
import theme from '../../../../styles/theme';

export const FollowerListWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '32rem',
  height: '43.6rem',
  marginTop: '2.7rem',

  borderRadius: '12px',
  border: `1px solid ${theme.colors.gray01}`,
});

export const FollowerContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20rem',
  height: '32em',
  margin: '1.8rem',
  gap: '4.3rem',
});

export const FollowerId = css({
  ...theme.fonts.Title,
  color: `${theme.colors.gray02}`,
});

export const FollowerItem = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.6rem',
  // margin: '1.8rem',
});
