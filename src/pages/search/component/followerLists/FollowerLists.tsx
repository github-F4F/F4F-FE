import { css } from '@emotion/react';
import { IcArrow } from '../../../../assets/svg';
import Button from '../../../../components/@common/button/Button';
import { FollowerContainer, FollowerId, FollowerItem } from '../followerLIstBox/FollowerListBox.style';
import theme from '../../../../styles/theme';

interface FollowerListsProps {
  login: string;
  avatar_url: string;
}

const FollowerLists = (props: FollowerListsProps) => {
  const { login, avatar_url } = props;

  return (
    <article css={FollowerContainer}>
      <div>
        <img src={avatar_url} alt="github profile img" css={{ width: '10rem', height: '10.5rem' }} />
      </div>
      <div css={FollowerItem}>
        <p css={FollowerId}>{login}</p>
        <Button
          variant="bgWhite"
          size="small"
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
          css={{ border: `1px solid ${theme.colors.black}` }}
          handleBtnClick={() => {}}
        >
          Follow
        </Button>
      </div>
    </article>
  );
};

export default FollowerLists;
