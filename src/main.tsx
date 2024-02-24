import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/components/layout/Layout';
import { Routers } from '@/routes';
import { GlobalStyle } from '@/styles';
import { Global } from '@emotion/react';
import ApiErrorBoundary from '@/components/layout/ApiErrorBoundary';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <ApiErrorBoundary>
        <Layout>
          <Routers />
        </Layout>
        <ToastContainer />
      </ApiErrorBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
