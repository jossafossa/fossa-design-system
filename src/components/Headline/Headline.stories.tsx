import { Headline } from './Headline';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Headline',
  component: Headline,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Headline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
