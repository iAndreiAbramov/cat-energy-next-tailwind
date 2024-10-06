import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'UI/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
	render: (args) => <Button {...args} />,
};
