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
import { DiscordConnect } from '@/pages/DiscordConnect';
import { DiscordGuide } from '@/pages/DiscordGuide';
import { Suspense } from 'react';
import PaymentAccessGuard from '@/components/auth/guard/PaymentAccessGuard';
import VerificationGuard from '@/components/auth/guard/VerificationGuard';

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
              <VerificationGuard guardType="StudentVerification">
                <Suspense fallback="..loading">
                  <StudentVerification />
                </Suspense>
              </VerificationGuard>
            )
          }
        ]
      },
      {
        path: RoutePath.Signup,
        element: <AuthAccessGuard />,
        children: [
          {
            index: true,
            element: (
              <VerificationGuard guardType="SignUp">
                <SignUp />
              </VerificationGuard>
            )
          }
        ]
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
            children: [
              {
                index: true,
                element: (
                  <VerificationGuard guardType="Discord">
                    <JoinDiscord />
                  </VerificationGuard>
                )
              }
            ]
          },
          {
            path: RoutePath.DiscordConnect,
            children: [
              {
                index: true,
                element: (
                  <VerificationGuard guardType="Discord">
                    <DiscordConnect />
                  </VerificationGuard>
                )
              }
            ]
          },
          {
            path: RoutePath.DiscordGuide,
            element: <DiscordGuide />
          },
          {
            path: RoutePath.Bevy,
            children: [
              {
                index: true,
                element: (
                  <VerificationGuard guardType="Bevy">
                    <Bevy />
                  </VerificationGuard>
                )
              }
            ]
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
