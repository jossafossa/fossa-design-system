import { Table } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
