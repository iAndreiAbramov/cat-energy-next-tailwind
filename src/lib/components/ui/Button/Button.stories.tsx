import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { HamburgerIcon } from '@/lib/components/ui/Header/components/icons';

const meta = {
	title: 'UI/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		text: 'подобрать программу',
	},
	render: (args) => <Button {...args} />,
};

export const Alter: Story = {
	args: {
		variant: 'alter',
		text: 'подобрать программу',
	},
	render: (args) => <Button {...args} />,
};

export const Icon: Story = {
	args: {
		variant: 'icon',
		icon: <HamburgerIcon />,
	},
	render: (args) => <Button {...args} />,
};
