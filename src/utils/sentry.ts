import { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom';
import { SENTRY_DSN_KEY } from '@/constants/environment';

const setSentry = () => {
  function initSentry() {
    if (process.env.NODE_ENV === 'development') return;

    console.log(`VERCEL ENV : ${process.env.VERCEL_ENV}`);
    Sentry.init({
      environment: process.env.VERCEL_ENV,
      dsn: SENTRY_DSN_KEY,
      tracesSampleRate: 1.0,
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

      tracePropagationTargets: [
        /^https:\/\/onboarding.gdschongik.com\/?.*$/,
        /^https:\/\/api\.gdschongik\.com\/?.*$/,
        /^https:\/\/dev-onboarding.gdschongik.com\/?.*$/,
        /^https:\/\/dev-api\.gdschongik\.com\/?.*$/
      ],
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0
    });
  }
  return { initSentry };
};

const sentry = setSentry();
export default sentry;
