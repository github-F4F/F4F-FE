import { css } from '@emotion/react';

const globalStyles = css`
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  :root {
    --vh: 100%;
  }

  html,
  body {
    overflow-x: hidden;
  }

  #root,
  body,
  html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    font-size: 62.5%;
    -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    /* 버튼 클릭 시 색 제거 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
  }
`;

export default globalStyles;
