import { css } from '@emotion/react';
import { useState } from 'react';
import { IcArrow } from '../../../assets/svg';
import Button from '../../../components/@common/button/Button';
import { useFollowUser } from '../../../hooks/queries/useFollowUser';
import { useUnFollowUser } from '../../../hooks/queries/useUnFollowUser';
import theme from '../../../styles/theme';

interface CardProps {
  login: string;
  avatar_url: string;
}

const Card = ({ login, avatar_url }: CardProps) => {
  const user_token = localStorage.getItem('token') || '';

  const [followed, setFollowed] = useState(true);
  const { mutate: unFollow } = useUnFollowUser();
  const { mutate: follow } = useFollowUser();

  const handleBtnClick = () => {
    if (followed) {
      unFollow({ user_token, username: login });
    } else {
      follow({ user_token, username: login });
    }

    setFollowed(prev => !prev);
  };

  return (
    <article css={{ display: 'flex', padding: '1rem' }}>
      <img src={avatar_url} alt="" css={{ width: '10rem', marginRight: '4.5rem' }} />

      <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
        <p
          css={css`
            padding: 0.5rem 0;
            ${theme.fonts.body03}
            font-weight: 300;
            color: ${theme.colors.gray02};
            margin-bottom: 2.5rem;
          `}
        >
          {login}
        </p>
        <Button
          size="small"
          variant={followed ? 'bgBlack' : 'bgWhite'}
          handleBtnClick={() => handleBtnClick()}
          css={{ width: '10rem' }}
          icon={
            <IcArrow
              css={css`
                & path {
                  stroke: ${followed ? theme.colors.white : theme.colors.black};
                }
              `}
            />
          }
        >
          {followed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    </article>
  );
};

export default Card;
