import { ErrorBoundary } from '@sentry/react';
import { Suspense, SuspenseProps } from 'react';
import LoadingSpinner from './LoadingSpinner';

type AsyncBoundaryProps = Omit<SuspenseProps, 'fallback'>;

const AsyncBoundary = ({ children, ...rest }: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary {...rest}>
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
