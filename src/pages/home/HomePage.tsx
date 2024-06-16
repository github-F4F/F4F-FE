import Bar from '../../components/bar/Bar';
import { HomePageWrapper, LoginContainer } from './HomePage.style';
import Button from '../../components/@common/button/Button';

const HomePage = () => {
  return (
    <>
      <main css={HomePageWrapper}>
        <Bar />
        <section css={LoginContainer}>
          <div
            css={{
              display: 'flex',
              marginLeft: '1.3rem',
              marginTop: '1rem',
            }}
          >
            <Button variant="bgWhite" size="small">
              깃허브 토큰 만들러가기
            </Button>
          </div>
        </section>
        <Bar />
      </main>
    </>
  );
};

export default HomePage;
