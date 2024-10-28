import { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/SideBar';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      {/* suspense for i18n */}
      <Suspense fallback="Loading...">
        <ErrorBoundary>
          <NavBar />

          <div className="page-content">
            <Sidebar />
            <AppRouter />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default App;
