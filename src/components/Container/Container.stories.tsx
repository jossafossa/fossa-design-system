import { Container } from './Container';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Wide: Story = {
  args: {
    width: 'wide',
  },
};

export const Narrow: Story = {
  args: {
    width: 'narrow',
  },
};
