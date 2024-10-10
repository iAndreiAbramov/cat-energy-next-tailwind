'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';
import './InputText.css';

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
	errorText?: string;
	isRequired?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
	({ labelText, errorText, isRequired = false, ...props }, ref) => {
		return (
			<div className={cn('flex flex-col gap-1')}>
				{labelText && (
					<label
						className={cn(
							'flex items-center gap-[10px]',
							'text-[20px] uppercase leading-none',
							'cursor-pointer',
						)}
					>
						{labelText}
						{isRequired && '*'}
						<input
							type="text"
							ref={ref}
							className={cn('input-text', {
								'input-text--error': errorText,
							})}
							{...props}
						/>
					</label>
				)}
				{errorText && <span className="error-text">{errorText}</span>}
			</div>
		);
	},
);

InputText.displayName = 'InputText';
