import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/ui/Button';
import { BUTTON_THEMES } from 'shared/ui/Button/ui/Button.interface';

describe('Button', () => {
  test('render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('secondary theme', () => {
    render(<Button theme={BUTTON_THEMES.SECONDARY}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(BUTTON_THEMES.SECONDARY);
  });
  test('border theme', () => {
    render(<Button theme={BUTTON_THEMES.BORDER}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(BUTTON_THEMES.BORDER);
  });
  test('invert theme', () => {
    render(<Button theme={BUTTON_THEMES.INVERT}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(BUTTON_THEMES.INVERT);
  });
  test('primary theme', () => {
    render(<Button theme={BUTTON_THEMES.PRIMARY}>test</Button>);
    expect(screen.getByText('test')).toHaveClass(BUTTON_THEMES.PRIMARY);
  });
});
