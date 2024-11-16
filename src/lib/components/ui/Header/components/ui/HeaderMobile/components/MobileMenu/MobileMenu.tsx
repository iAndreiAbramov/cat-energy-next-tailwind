'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU_LINKS } from '@/lib/components/ui/Header/constants/menu-links';
import { cn } from '@/lib/utils/cn';

export const MobileMenu: React.FC = () => {
	const pathName = usePathname();

	return (
		<nav className={cn('absolute inset-x-0 bottom-0 z-50 translate-y-full', 'bg-[#FFFFFF]')}>
			<ul>
				{MENU_LINKS.map(({ text, href }) => (
					<li
						key={text}
						className={cn(
							'flex items-center justify-center',
							'border-t border-t-[#E6E6E6] last:border-b last:border-b-[#E6E6E6]',
							'text-[20px] font-medium uppercase leading-[100%] text-[#000000]',
							'hover:bg-gray-100',
							{
								'bg-gray-200 hover:bg-gray-200': pathName === href,
							},
							'transition-colors duration-300',
						)}
					>
						<Link
							href={href}
							className={cn('align-center flex justify-center', 'h-full w-full p-[24px]')}
						>
							{text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
