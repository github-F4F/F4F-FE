import { css } from '@emotion/react';
import { IcArrow } from '../../../assets/svg';
import Button from '../../../components/@common/button/Button';
import theme from '../../../styles/theme';

interface CardProps {
  login: string;
  avatar_url: string;
}

const Card = ({ login, avatar_url }: CardProps) => {
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
          // TODO: 팔로우 API 추가
          handleBtnClick={() => {}}
          css={{ width: '10rem' }}
          icon={
            <IcArrow
              css={css`
                & path {
                  stroke: ${theme.colors.white};
                }
              `}
            />
          }
        >
          UnFollow
        </Button>
      </div>
    </article>
  );
};

export default Card;
