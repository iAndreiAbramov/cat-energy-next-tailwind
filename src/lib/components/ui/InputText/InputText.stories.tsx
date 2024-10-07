import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputText } from './InputText';

const meta = {
	title: 'UI/InputText',
	component: InputText,
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		labelText: 'Имя:',
		isRequired: true,
		placeholder: 'Введите имя',
	},
	render: (args) => <InputText {...args} />,
};

export const WithError: Story = {
	args: {
		labelText: 'Имя',
		errorText: 'Введите имя',
		isRequired: true,
		placeholder: 'Введите имя',
	},
	render: (args) => <InputText {...args} />,
};
