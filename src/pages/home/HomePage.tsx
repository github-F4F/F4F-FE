import { css } from '@emotion/react';
import { IcArrow } from '../../assets/svg';
import Button from '../../components/@common/button/Button';
import Bar from '../../components/bar/Bar';
import { ButtonWrapper, HomePageWrapper, LoginContainer, SubText, SubTextWrapper } from './HomePage.style';
import theme from '../../styles/theme';
import Input from '../../components/@common/input/Input';
import useGetToken from '../../hooks/useGetToken';

const HomePage = () => {
  const { handleChangeToken, handleClickCheckFollower } = useGetToken();
  return (
    <main css={HomePageWrapper}>
      <Bar />
      <section css={LoginContainer}>
        <article css={ButtonWrapper}>
          <Button
            variant="bgWhite"
            size="small"
            handleBtnClick={() => (window.location.href = 'https://github.com/settings/tokens')}
            icon={
              <IcArrow
                css={css`
                  & path {
                    stroke: ${theme.colors.black};
                    display: flex;
                    align-items: center;
                  }
                `}
              />
            }
          >
            깃허브 토큰 만들러가기
          </Button>
          <div css={SubTextWrapper}>
            <p css={SubText}>토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!</p>
          </div>
        </article>
        <article css={ButtonWrapper}>
          <Input variant="default" size="large" placeholder="GitHub 토큰을 입력해주세요" onChange={handleChangeToken} />
        </article>
        <article css={ButtonWrapper}>
          <Button variant="bgBlack" size="large" handleBtnClick={handleClickCheckFollower}>
            나의 맞팔 확인하기
          </Button>
        </article>
      </section>
      <Bar />
    </main>
  );
};

export default HomePage;
