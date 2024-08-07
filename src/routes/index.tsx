import App from '@/App';
import * as Sentry from '@sentry/react';
import RoutePath from '@/routes/routePath';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AuthAccessGuard from '@/components/auth/guard/AuthAccessGuard';
import { Text } from '@/components/common/Wrapper';
import {
  AuthServerRedirectNavigate,
  StudentVerificationServerRedirect,
  Auth,
  StudentVerification,
  SignUp,
  Dashboard,
  JoinDiscord,
  Bevy,
  PaymentsSuccess,
  PaymentsFail,
  PaymentsCheckout
} from '@/pages';
import { DicordConnect } from '@/pages/DiscordConnect';
import { DiscordGuide } from '@/pages/DiscordGuide';
import { Suspense } from 'react';
import PaymentAccessGuard from '@/components/auth/guard/PaymentAccessGuard';

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter);

export const Routers = () => {
  return <RouterProvider router={router} />;
};

// TODO: error page, meta tag
const router = sentryCreateBrowserRouter([
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
        path: RoutePath.GithubSignin,
        children: [{ index: true, element: <Auth /> }]
      },
      {
        path: RoutePath.StudentVerification,
        element: <AuthAccessGuard />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback="..loading">
                <StudentVerification />
              </Suspense>
            )
          }
        ]
      },
      {
        path: RoutePath.Signup,
        element: <AuthAccessGuard />,
        children: [{ index: true, element: <SignUp /> }]
      },
      {
        path: RoutePath.Home,
        element: <AuthAccessGuard />,
        children: [
          {
            path: RoutePath.Dashboard,
            element: <Dashboard />
          },
          {
            path: RoutePath.Discord,
            element: <JoinDiscord />
          },
          {
            path: RoutePath.DiscordConnect,
            element: <DicordConnect />
          },
          {
            path: RoutePath.DiscordGuide,
            element: <DiscordGuide />
          },
          {
            path: RoutePath.Bevy,
            element: <Bevy />
          }
        ]
      },
      {
        path: RoutePath.PaymentsCheckout,
        element: <PaymentAccessGuard />,
        children: [{ index: true, element: <PaymentsCheckout /> }]
      },
      {
        path: RoutePath.PaymentsFail,
        element: <AuthAccessGuard />,
        children: [{ index: true, element: <PaymentsFail /> }]
      },
      {
        path: RoutePath.PaymentsSuccess,
        element: <PaymentsSuccess />
      },
      // Todo: 404 Not found page
      { path: '*', element: <Text>not found page</Text> }
    ]
  }
]);
