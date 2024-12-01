import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/SideBar';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Loader } from 'shared/ui/Loader';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      {/* suspense for i18n */}
      <Suspense fallback={<Loader />}>
        <ErrorBoundary inner>
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
