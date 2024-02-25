import { PropsWithChildren } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import RoutePath from '@routes/routePath';

type ErrorCodeType = {
  errorCode: string;
  status: number;
  statusCode: string;
};

type ErrorResponseType = {
  errorCode: ErrorCodeType;
  message: string;
};

export default function ApiErrorBoundary({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();

  queryClient.getQueryCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  queryClient.getMutationCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  function handleError(axiosError: AxiosError) {
    const errorResponse = axiosError.response?.data as ErrorResponseType;
    const { status } = errorResponse.errorCode;
    const message = errorResponse.message;

    switch (status) {
      case 401:
      case 403:
        toast.error(message);
        // TODO: where ?
        redirect(RoutePath.Home);
        break;
      default:
        toast.error(message);
        break;
    }
  }

  return <>{children}</>;
}
