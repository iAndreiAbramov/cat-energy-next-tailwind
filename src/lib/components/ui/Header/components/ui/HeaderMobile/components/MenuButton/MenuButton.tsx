'use client';

import React from 'react';
import { Button } from '@/lib/components/ui';
import { CrossIcon, HamburgerIcon } from '@/lib/components/ui/Header/components/icons';
import { cn } from '@/lib/utils/cn';

interface IMenuButtonProps {
	isMenuOpened: boolean;

	setIsMenuOpened(status: boolean): void;
}

export const MenuButton: React.FC<IMenuButtonProps> = ({ isMenuOpened, setIsMenuOpened }) => {
	return (
		<Button
			variant="icon"
			icon={isMenuOpened ? <CrossIcon /> : <HamburgerIcon />}
			onClick={() => setIsMenuOpened(!isMenuOpened)}
			className={cn('h-[26px] min-w-[26px]')}
		/>
	);
};
