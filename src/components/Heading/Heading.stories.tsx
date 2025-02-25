import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    children: 'Heading',
  },
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const H1: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 1,
  },
};

export const H2: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 2,
  },
};

export const H3: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 3,
  },
};

export const H4: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 4,
  },
};

export const H5: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 5,
  },
};

export const H6: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 6,
  },
};
