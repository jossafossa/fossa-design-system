import { Tag } from './Tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    children: 'Tag',
  },
  argTypes: {
    autoColor: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const autoColor: Story = {
  args: {
    children: 'Large',
    autoColor: true,
    colors: [
      '#3ab795',
      '#f7b801',
      '#f24e1e',
      '#a239ca',
      '#00a1e4',
      '#495057',
      '#343a40',
      '#212529',
      '#6c757d',
      '#adb5bd',
      '#e9ecef',
    ],
  },
};
