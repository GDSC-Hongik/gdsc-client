import * as Sentry from '@sentry/react';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoutePath from '@/routes/routePath';
import { ReactNode } from 'react';

type ErrorResponseType = {
  errorCodeName: string;
  errorMessage: string;
};

export default function ApiErrorBoundary({
  children
}: {
  children: ReactNode;
}) {
  const queryClient = useQueryClient();

  queryClient.getQueryCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  queryClient.getMutationCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  function handleError(axiosError: AxiosError) {
    const errorResponse = axiosError.response?.data as ErrorResponseType;
    if (errorResponse) {
      // eslint-disable-next-line import/namespace
      Sentry.captureException(errorResponse, {});
    }
    const message = errorResponse.errorMessage;

    switch (axiosError.response?.status) {
      case 401:
      case 403:
        toast.error(message);
        sessionStorage.setItem('isLogin', 'false');
        redirect(RoutePath.Home);
        break;
      default:
        toast.error(message);
        break;
    }

    if (errorResponse) {
      // eslint-disable-next-line import/namespace
      Sentry.captureException(errorResponse, {});
    }
  }

  return <>{children}</>;
}
