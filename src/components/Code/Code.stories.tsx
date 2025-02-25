import { Code } from './Code';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    children: `import { Code } from './Code';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: true,
    },
  },
  args: {
    children: "",
    language: 'tsx',
  },
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};`,
    language: 'tsx',
  },
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
