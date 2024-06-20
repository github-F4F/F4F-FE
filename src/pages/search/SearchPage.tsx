import CardList from './component/CardList';
import UserInfo from './component/UserInfo';
import FollowerListBox from './component/followerLIstBox/FollowerListBox';

const SearchPage = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <UserInfo />
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardList />
        <FollowerListBox />
      </div>
    </div>
  );
};

export default SearchPage;
