import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '../../../components/@common/loading/Loading';
import { useGetFollowList } from '../../../hooks/queries/useGetFollowList';
import Card from './Card';

const CardList = () => {
  const user_token = localStorage.getItem('token') || '';

  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useGetFollowList(user_token);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      css={{
        height: '43.6rem',
        overflow: 'auto',
        borderRadius: '12px',
        border: '1px solid #D5D5D5',
        padding: '0 1rem',
      }}
    >
      {data?.pages[data?.pages.length - 1].map((user, userIndex) => (
        <Card key={`user-${userIndex}`} {...user} />
      ))}
      {isFetchingNextPage ? (
        <div css={{ width: '27rem', marginTop: '5rem' }}>
          <Loading />
        </div>
      ) : (
        <div ref={ref} />
      )}
    </div>
  );
};

export default CardList;
