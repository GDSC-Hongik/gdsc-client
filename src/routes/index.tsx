import { JoinDiscrod } from '@/pages/JoinDiscrod';
import { Bevy } from '@/pages/Bevy';
import App from '@/App';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';
import { Auth } from '@/pages/Auth';
import { MyPage } from '@/pages/MyPage';
import { SignUp } from '@/pages/SignUp';
import { StudentVerification } from '@/pages/StudentVerification';
import RoutePath from '@/routes/routePath';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const Routers = () => {
  return <RouterProvider router={router} />;
};

// TODO: error page, meta tag
const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
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
        element: <JoinDiscrod />
      },
      {
        path: RoutePath.Bevy,
        element: <Bevy />
      }
    ]
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
  { path: '*', element: <>not found page</> }
]);
