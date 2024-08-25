/* eslint-disable import/namespace */
import { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom';
import { VITE_SENTRY_DSN_KEY } from '@/constants/environment';

const setSentry = () => {
  function initSentry() {
    if (process.env.NODE_ENV === 'development') return;

    Sentry.init({
      environment: process.env.NODE_ENV,
      dsn: VITE_SENTRY_DSN_KEY || process.env.VITE_SENTRY_DSN_KEY,
      tracesSampleRate: 1.0,
      tracePropagationTargets: [
        'localhost',
        /^https:\/\/(?:dev-|local-)?onboarding\.gdschongik\.com(?:\/.*)/,
        /^https:\/\/(?:dev-)?api\.gdschongik\.com(?:\/.*)/
      ],
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes
        }),
        Sentry.replayIntegration()
      ],

      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0
    });
  }
  return { initSentry };
};

const sentry = setSentry();
export default sentry;
