import React, { forwardRef, ReactElement } from 'react';

import './Button.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'alter' | 'icon';
	text?: string;
	icon?: ReactElement;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ variant, text, icon, children, ...props }, ref) => {
		switch (variant) {
			case 'primary':
				return (
					<button className={'button button--primary'} ref={ref} {...props}>
						{text ? text : null}
						{children ? children : null}
					</button>
				);
			case 'alter':
				return (
					<button className={'button button--alter'} ref={ref} {...props}>
						{text ? text : null}
						{children}
					</button>
				);
			case 'icon':
				return (
					<button className={'button-icon'} ref={ref} {...props}>
						{icon ? icon : null}
					</button>
				);
		}
	},
);

Button.displayName = 'Button';
