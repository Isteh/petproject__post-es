import { fireEvent, screen } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTranslations } from 'shared/lib/renderWithTranslations';
import Sidebar from 'widgets/SideBar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslations(
      <StoreProvider>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </StoreProvider>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('collapse', () => {
    renderWithTranslations(
      <StoreProvider>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </StoreProvider>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar--toggler');
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
