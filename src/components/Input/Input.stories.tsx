import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    isLoading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    placeholder: 'First name',
  },
};

export const withLeadingElement: Story = {
  args: {
    type: 'text',
    leadingElement: '$',
    placeholder: '12.000',
    trailingElement: 'USD',
  },
};

export const isLoading: Story = {
  args: {
    placeholder: 'Email address',
    isLoading: true,
  },
};
