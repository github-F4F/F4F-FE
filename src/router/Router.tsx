import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import SearchPage from '../pages/search/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);

export default router;
