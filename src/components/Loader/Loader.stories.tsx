import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
