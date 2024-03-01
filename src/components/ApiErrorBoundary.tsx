import { PropsWithChildren } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoutePath from '@/routes/routePath';

type ErrorResponseType = {
  errorCodeName: string;
  errorMessage: string;
};

export default function ApiErrorBoundary({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  const navigation = useNavigate();
  queryClient.getQueryCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  queryClient.getMutationCache().config = {
    onError: (error) => handleError(error as AxiosError)
  };

  function handleError(axiosError: AxiosError) {
    const errorResponse = axiosError.response?.data as ErrorResponseType;

    const message = errorResponse.errorMessage;

    switch (axiosError.response?.status) {
      case 401:
      case 403:
        toast.error(message);
        navigation(RoutePath.Index);
        break;
      default:
        toast.error(message);
        break;
    }
  }

  return <>{children}</>;
}
