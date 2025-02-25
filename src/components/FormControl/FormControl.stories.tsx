import { Input } from '@components';
import { FormControl } from './FormControl';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FormControl.Label>Email address</FormControl.Label>
        <Input value="my-email@example.com" />
      </>
    ),
  },
};

export const withValidation: Story = {
  args: {
    children: (
      <>
        <FormControl.Label>Email address</FormControl.Label>
        <Input value="my-email@" />
        <FormControl.Validation>Please enter a valid email address</FormControl.Validation>
      </>
    ),
  },
};

export const withHint: Story = {
  args: {
    children: (
      <>
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" />
        <FormControl.Hint>Must be at least 8 characters long</FormControl.Hint>
      </>
    ),
  },
};
