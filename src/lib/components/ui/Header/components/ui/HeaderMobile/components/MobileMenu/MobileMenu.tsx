'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { MENU_LINKS } from '@/lib/components/ui/Header/constants/menu-links';

export const MobileMenu: React.FC = () => {
	return (
		<nav className={cn('absolute inset-x-0 bottom-0 z-50 translate-y-full', 'bg-[#FFFFFF]')}>
			<ul>
				{MENU_LINKS.map(({ text, href }) => (
					<li
						key={text}
						className={cn(
							'flex items-center justify-center',
							'p-[24px]',
							'border-t-[1px] border-t-[#E6E6E6] last:border-b-[1px] last:border-b-[#E6E6E6]',
							'text-[20px] font-medium uppercase leading-[100%] text-[#000000]',
						)}
					>
						<Link href={href}>{text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
