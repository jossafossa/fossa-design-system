import { Link } from './Link';
import type { Meta, StoryObj } from '@storybook/react';

// TODO: Implement Link
const meta = {
  title: 'ui/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Link',
  },
};
