import { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom';
import { SENTRY_DSN_KEY } from '@/constants/environment';

Sentry.init({
  dsn: SENTRY_DSN_KEY,
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes
    }),
    // eslint-disable-next-line import/namespace
    Sentry.replayIntegration()
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: [
    /^https:\/\/onboarding.gdschongik.com\/?.*$/,
    /^https:\/\/api\.gdschongik\.com\/?.*$/,
    /^https:\/\/dev-onboarding.gdschongik.com\/?.*$/,
    /^https:\/\/dev-api\.gdschongik\.com\/?.*$/
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});
