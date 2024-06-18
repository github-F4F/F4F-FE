import UserInfo from './component/UserInfo';
import FollowerListBox from './component/followerLIstBox/FollowerListBox';

const SearchPage = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <UserInfo />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FollowerListBox />
      </div>
    </div>
  );
};

export default SearchPage;
