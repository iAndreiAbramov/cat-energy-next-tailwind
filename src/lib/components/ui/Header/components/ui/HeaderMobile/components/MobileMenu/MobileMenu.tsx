'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';

export const MobileMenu: React.FC = () => {
	return (
		<nav className={cn('absolute inset-x-0 bottom-0 z-50 translate-y-full', 'bg-[#FFFFFF]')}>
			MobileMenu
		</nav>
	);
};
