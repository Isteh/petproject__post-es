import { Decorator } from '@storybook/react/*';
import 'app/styles/globals.scss';

export const StyleDecorator: Decorator = (Story) => {
  return (
    <>
      <Story />
    </>
  );
};
