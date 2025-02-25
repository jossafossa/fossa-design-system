import { Tag } from '../Tag';
import { Stack } from './Stack';
import type { Meta, StoryObj } from '@storybook/react';

// TODO: Implement Stack
const meta = {
  title: 'ui/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Tag>Animals</Tag>
        <Tag>Plants</Tag>
        <Tag>Trees</Tag>
        <Tag>Minerals</Tag>
        <Tag>Other</Tag>
      </>
    ),
  },
};
