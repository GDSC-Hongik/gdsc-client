import App from '@/App';
import * as Sentry from '@sentry/react';
import RoutePath from '@/routes/routePath';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import {
  MypageAccessGuard,
  AuthAccessGuard,
  SignupAccessGuard,
  StudentVerificationAccessGuard,
  OnboardingNotOpenedAccessGuard,
  OnboardingClosedAccessGuard
} from '@/components/auth/guard';
import { Text } from '@/components/common/Wrapper';
import {
  AuthServerRedirectNavigate,
  StudentVerificationServerRedirect,
  Auth,
  StudentVerification,
  SignUp,
  Dashboard,
  JoinDiscord,
  UpdatedStudentVerification,
  Bevy,
  OnboardingNotOpened,
  OnboardingClosed,
  PaymentsSuccess,
  PaymentsFail,
  PaymentsCheckout
} from '@/pages';
import { DicordConnect } from '@/pages/DiscordConnect';
import { DiscordGuide } from '@/pages/DiscordGuide';
import { Suspense } from 'react';

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
        path: RoutePath.AuthenticationProcess1_GithubSignin,
        element: <AuthAccessGuard />,
        children: [{ index: true, element: <Auth /> }]
      },
      {
        path: RoutePath.AuthenticationProcess2_StudentVerification,
        element: <StudentVerificationAccessGuard />,
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
        path: RoutePath.OnboardingNotOpened,
        element: <OnboardingNotOpenedAccessGuard />,
        children: [{ index: true, element: <OnboardingNotOpened /> }]
      },
      {
        path: RoutePath.OnboardingClosed,
        element: <OnboardingClosedAccessGuard />,
        children: [{ index: true, element: <OnboardingClosed /> }]
      },
      {
        path: RoutePath.PaymentsCheckout,
        element: <PaymentsCheckout />
      },
      {
        path: RoutePath.PaymentsFail,
        element: <PaymentsFail />
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
