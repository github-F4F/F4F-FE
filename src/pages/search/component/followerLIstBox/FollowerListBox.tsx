import { FollowerListWrapper } from './FollowerListBox.style';
import { useGetFollowersList } from '../../../../hooks/queries/useGetUser';
import Loading from '../../../../components/@common/loading/Loading';
import FollowerLists from '../followerLists/FollowerLists';
const FollowerListBox = () => {
  const token = localStorage.getItem('token') || '';
  const { data, isLoading } = useGetFollowersList(token);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section css={FollowerListWrapper}>
            {data?.map(user => (
              <FollowerLists key={user.id} data={[user]} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default FollowerListBox;
