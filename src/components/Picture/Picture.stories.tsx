import { Picture } from './Picture';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Picture',
  component: Picture,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Picture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
