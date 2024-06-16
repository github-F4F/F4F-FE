import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import SearchPage from '../pages/search/SearchPage';
import { PATH } from './route';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <HomePage />,
  },
  {
    path: PATH.SEARCH,
    element: <SearchPage />,
  },
]);

export default router;
