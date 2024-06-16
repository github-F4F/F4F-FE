import { css } from '@emotion/react';
import theme from '../styles/theme';
import gitImg from '/assets/images/git.png';

const Header = () => {
  return (
    <header
      css={css({
        display: 'flex',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: `1px ${theme.colors.gray01} solid`,
        cursor: 'pointer',
      })}
    >
      <img
        src={gitImg}
        alt=""
        css={css({
          width: '30px',
          height: '30px',
          marginRight: '16px',
        })}
      />
      <h1
        css={css`
          ${theme.fonts.body01}
        `}
      >
        깃허브 맞팔 탐지기
      </h1>
    </header>
  );
};

export default Header;
