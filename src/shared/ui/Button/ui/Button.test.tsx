import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/ui/Button';
import { BUTTON_THEMES } from 'shared/ui/Button/ui/Button.interface';

describe('Button', () => {
  test('render', () => {
    render(<Button>123</Button>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });
  test('secondary theme', () => {
    render(<Button theme={BUTTON_THEMES.SECONDARY}>123</Button>);
    expect(screen.getByText('123')).toHaveClass(BUTTON_THEMES.SECONDARY);
  });
  test('border theme', () => {
    render(<Button theme={BUTTON_THEMES.BORDER}>123</Button>);
    expect(screen.getByText('123')).toHaveClass(BUTTON_THEMES.BORDER);
  });
  test('invert theme', () => {
    render(<Button theme={BUTTON_THEMES.INVERT}>123</Button>);
    expect(screen.getByText('123')).toHaveClass(BUTTON_THEMES.INVERT);
  });
  test('primary theme', () => {
    render(<Button theme={BUTTON_THEMES.PRIMARY}>123</Button>);
    expect(screen.getByText('123')).toHaveClass(BUTTON_THEMES.PRIMARY);
  });
});
