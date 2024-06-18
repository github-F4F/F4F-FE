import CardList from './component/CardList';
import UserInfo from './component/UserInfo';

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
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default SearchPage;
