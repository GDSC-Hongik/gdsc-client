import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routers } from '@/routes';
import { GlobalStyle } from '@/styles';
import { Global } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import './styles/styles.scss';
import Chatbot from '@/components/chatbot/Chatbot';

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
      <Chatbot />
      <Routers />
      <ReactQueryDevtools />
    </QueryClientProvider>
    <ToastContainer
      limit={1}
      hideProgressBar
      closeButton={false}
      autoClose={4000}
    />
  </React.StrictMode>
);
