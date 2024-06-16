import { css } from '@emotion/react';
import theme from '../styles/theme';
import gitImg from '/assets/images/git.png';

const Header = () => {
  return (
    <header
      css={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.4rem 2rem',
        borderBottom: `1px ${theme.colors.gray01} solid`,
        cursor: 'pointer',
      }}
    >
      <img
        src={gitImg}
        alt=""
        css={{
          width: '3rem',
          height: '3rem',
          marginRight: '16px',
        }}
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
