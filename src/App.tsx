import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import router from './router/Router';

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
