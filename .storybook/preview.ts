import type { Preview } from '@storybook/react';
import { withMemoryRouter } from './withMemoryRouter';
import '@assets/base.scss';

export const decorators = [withMemoryRouter];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
