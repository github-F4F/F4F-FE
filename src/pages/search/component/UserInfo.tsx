import { css } from '@emotion/react';
import Loading from '../../../components/@common/loading/Loading';
import { useGetUser } from '../../../hooks/queries/useGetUser';
import theme from '../../../styles/theme';

const UserInfo = () => {
  // TODO: token 불러오기

  const user_token = 'token';

  const { data, isLoading } = useGetUser(user_token);

  return (
    <>
      {isLoading ? (
        <div css={{ width: '40rem', marginTop: '10rem' }}>
          <Loading />
        </div>
      ) : (
        <section
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={`${data.avatar_url}`}
            alt="유저 이미지"
            css={{ width: '18rem', height: '16rem', marginTop: '2rem' }}
          />
          <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p
              css={css`
                padding: 1rem 0;
                ${theme.fonts.body03}
                font-weight: 500;
              `}
            >{`${data.login}`}</p>

            <p
              css={css`
                padding: 0.5rem 0;
                ${theme.fonts.body03}
                font-weight: 300;
                color: ${theme.colors.gray02};
              `}
            >
              메롱
            </p>
          </div>

          <div css={{ display: 'flex', justifyContent: 'space-between', width: '30rem', marginTop: '2rem' }}>
            <p css={theme.fonts.body01}>팔로우: {data.followers}명</p>
            <p css={theme.fonts.body01}>팔로워: {data.following}명</p>
          </div>
        </section>
      )}
    </>
  );
};

export default UserInfo;
