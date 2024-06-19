import { FollowerListWrapper } from './FollowerListBox.style';
import Loading from '../../../../components/@common/loading/Loading';
import FollowerLists from '../followerLists/FollowerLists';
import useFollowerInfiniteQuery from '../../../../hooks/queries/useFollowerInfiniteQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const FollowerListBox = () => {
  const token = localStorage.getItem('token') || '';
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useFollowerInfiniteQuery(token);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section css={FollowerListWrapper}>
            {data?.pages[data?.pages.length - 1].map(user => (
              <FollowerLists key={user.id} {...user} />
            ))}
            {isFetchingNextPage ? (
              <div css={{ width: '27rem', marginTop: '5rem' }}>
                <Loading />
              </div>
            ) : (
              <div ref={ref} />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default FollowerListBox;
