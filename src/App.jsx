import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Header/Navbar';
import Gigs from './Pages/Gigs';
import AddNewGig from './Pages/AddNewGig';
import Gig from './Pages/gig';
import MessagesPage from './Pages/MessagesPage';
import MessagePage from './Pages/MessagePage';
import OrdersPage from './Pages/OrdersPage';
import Logout from './Pages/Logout';
import MyGigsPage from './Pages/MyGigsPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  const Layout = function () {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <RegisterPage />,
    },
    { path: '/login', element: <LoginPage /> },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/gigs/:cat', element: <Gigs /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/mygigs', element: <MyGigsPage /> },
        { path: '/orders', element: <OrdersPage /> },
        { path: '/messages', element: <MessagesPage /> },
        { path: '/message/:id', element: <MessagePage /> },
        { path: '/addgig', element: <AddNewGig /> },
        { path: '/logout', element: <Logout /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
