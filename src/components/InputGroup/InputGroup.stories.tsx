import { fn } from '@storybook/test';
import { InputGroup } from './InputGroup';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, Button } from '@components';

const meta = {
  title: 'ui/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [
      <Input key="1" type="text" placeholder="Email address" />,
      <Button key="2" onClick={fn()}>
        Submit
      </Button>,
    ],
  },
};
