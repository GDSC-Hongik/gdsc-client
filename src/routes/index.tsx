import App from '@/App';
import { JoinDiscord } from '@/pages/JoinDiscord';
import { Bevy } from '@/pages/Bevy';
import { Auth } from '@/pages/Auth';
import { MyPage } from '@/pages/MyPage';
import { SignUp } from '@/pages/SignUp';
import { StudentVerification } from '@/pages/StudentVerification';
import UpdatedStudentVerification from '@/pages/UpdatedStudentVerification';

import { AuthServerRedirectNavigate } from '@/pages/redirect/AuthServerRedirectNavigate';
import { StudentVerificationServerRedirect } from '@/pages/redirect/StudentVerificationServerRedirect';

import RoutePath from '@/routes/routePath';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  MypageAccessGuard,
  AuthAccessGuard,
  SignupAccessGuard,
  StudentVerificationAccessGuard
} from '@/components/auth/guard';
import { Text } from '@/components/common/Wrapper';

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
        path: RoutePath.AuthServerRedirect,
        element: <AuthServerRedirectNavigate />
      },
      {
        path: RoutePath.StudentVerificationServerRedirect,
        element: <StudentVerificationServerRedirect />
      },
      {
        path: RoutePath.AuthenticationProcess1_GithubSignin,
        element: <AuthAccessGuard />,
        children: [{ index: true, element: <Auth /> }]
      },
      {
        path: RoutePath.AuthenticationProcess2_StudentVerification,
        element: <StudentVerificationAccessGuard />,
        children: [{ index: true, element: <StudentVerification /> }]
      },
      {
        path: RoutePath.AuthenticationProcess2_UpdatedStudentVerification,
        element: <StudentVerificationAccessGuard />,
        children: [{ index: true, element: <UpdatedStudentVerification /> }]
      },
      {
        path: RoutePath.AuthenticationProcess3_Signup,
        element: <SignupAccessGuard />,
        children: [{ index: true, element: <SignUp /> }]
      },
      {
        path: RoutePath.Index,
        element: <MypageAccessGuard />,
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
      // Todo: 404 Not found page
      { path: '*', element: <Text>not found page</Text> }
    ]
  }
]);
