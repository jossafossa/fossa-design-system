import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
