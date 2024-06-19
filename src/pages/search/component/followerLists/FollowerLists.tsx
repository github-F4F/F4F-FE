import { css } from '@emotion/react';
import { IcArrow } from '../../../../assets/svg';
import Button from '../../../../components/@common/button/Button';
import { FollowerContainer, FollowerId, FollowerItem } from '../followerLIstBox/FollowerListBox.style';
import theme from '../../../../styles/theme';
import { useState } from 'react';
import { useUnFollowUser } from '../../../../hooks/queries/useUnFollowUser';
import { useFollowUser } from '../../../../hooks/queries/useFollowUser';

interface FollowerListsProps {
  login: string;
  avatar_url: string;
}

const FollowerLists = (props: FollowerListsProps) => {
  const user_token = localStorage.getItem('token') || '';
  const { login, avatar_url } = props;
  const [followed, setFollowed] = useState(false);
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
    <article css={FollowerContainer}>
      <div>
        <img src={avatar_url} alt="github profile img" css={{ width: '10rem', height: '10.5rem' }} />
      </div>
      <div css={FollowerItem}>
        <p css={FollowerId}>{login}</p>
        <Button
          variant={followed ? 'bgBlack' : 'bgWhite'}
          size="small"
          icon={
            <IcArrow
              css={css`
                & path {
                  stroke: ${followed ? theme.colors.white : theme.colors.black};
                  display: flex;
                  align-items: center;
                }
              `}
            />
          }
          css={{ border: `1px solid ${theme.colors.black}` }}
          handleBtnClick={() => handleBtnClick()}
        >
          {followed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    </article>
  );
};

export default FollowerLists;
