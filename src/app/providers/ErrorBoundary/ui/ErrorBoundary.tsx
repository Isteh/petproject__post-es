import { InnerPageError } from 'widgets/InnerPageError';
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from './ErrorBoundary.interface';
import React, { ErrorInfo, Suspense } from 'react';
import { OuterPageError } from 'widgets/OuterPageError';

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    const { hasError } = this.state;
    const { children, inner } = this.props;
    if (hasError) {
      return (
        <Suspense fallback="">
          {inner ? <InnerPageError /> : <OuterPageError />}
        </Suspense>
      );
    }
    return children;
  }
}
export default ErrorBoundary;
