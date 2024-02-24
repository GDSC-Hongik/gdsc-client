import App from '@/App';
import { LoginLayout } from '@components/common/LoginLayout';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom';
import { MyPage } from '@pages/MyPage';
import { MyPageEdit } from '@pages/MyPageEdit';
import { Auth } from '@pages/Auth';
import { SignUp } from '@pages/SignUp';
import { JoinDiscrod } from '@/pages/JoinDiscrod';
import { Bevy } from '@/pages/Bevy';

type RouteChildren = {
  auth: boolean;
} & RouteObject;

const routeChildren: RouteChildren[] = [
  {
    path: '/',
    element: <App />,
    auth: false
  },
  {
    path: '/auth',
    element: <Auth />,
    auth: false
  },
  {
    path: '/signup',
    element: <SignUp />,
    auth: false
  },
  {
    path: '/mypage',
    element: <MyPage />,
    auth: true
  },
  {
    path: '/discord',
    element: <JoinDiscrod />,
    auth: true
  },
  {
    path: '/bevy',
    element: <Bevy />,
    auth: true
  }
];

const browserRouter = routeChildren.map(({ path, element, auth }) => {
  return {
    path,
    element: auth ? <LoginLayout>{element}</LoginLayout> : element
  };
});

// TODO: error page, meta tag
const router = createBrowserRouter([
  {
    path: '/',
    // element:
    // errorElement:
    children: browserRouter
  }
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
