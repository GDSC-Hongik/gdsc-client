import { JoinDiscord } from '@/pages/JoinDiscord';
import { Bevy } from '@/pages/Bevy';
import { AuthenticatedLayout } from '@/components/auth/AuthenticatedLayout';
import { Auth } from '@/pages/Auth';
import { MyPage } from '@/pages/MyPage';
import { SignUp } from '@/pages/SignUp';
import { StudentVerification } from '@/pages/StudentVerification';
import RoutePath from '@/routes/routePath';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import App from '@/App';
import { AuthServerRedirectNavigate } from '@/pages/AuthServerRedirectNavigate';

export const Routers = () => {
  return <RouterProvider router={router} />;
};

// TODO: error page, meta tag
const router = createBrowserRouter([
  {
    path: RoutePath.Index,
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: RoutePath.Index,
        element: <AuthenticatedLayout />,
        children: [
          {
            path: RoutePath.MyPage,
            element: <MyPage />
          },
          {
            path: RoutePath.Discord,
            element: <JoinDiscord />
          },
          {
            path: RoutePath.Bevy,
            element: <Bevy />
          }
        ]
      },
      {
        path: RoutePath.AuthServerRedirect,
        element: <AuthServerRedirectNavigate />
      },
      {
        path: RoutePath.AuthenticationProcess1_GithubSignin,
        element: <Auth />
      },
      {
        path: RoutePath.AuthenticationProcess2_StudentVerification,
        element: <StudentVerification />
      },
      {
        path: RoutePath.AuthenticationProcess3_Signup,
        element: <SignUp />
      },
      // Todo: 404 Not found page
      { path: '*', element: <>not found page</> }
    ]
  }
]);
