import logo from './logo.svg';
import './App.css';
import AdminPanel from './Pages/AdminPanel';
import Home from './Pages/Home';
import ProductPage from './Components/ProductPage';
import NotFound from './Pages/NotFound';
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';

function App() {
  const router = createBrowserRouter([ {
    path: "/",
    element: (
      <ProductProvider>
        <Layout />
      </ProductProvider>
    ),
    children: [ {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      }, 
      {
        path: "/admin",
        element: <AdminPanel />
      }, 
      {
        path: "*",
        element: <NotFound />
      }
    ],
    }, {},
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
