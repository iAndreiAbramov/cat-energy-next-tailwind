'use client';
import React from 'react';
import { cn } from '@/lib/utils/cn';
import { LogoDesktopIcon, LogoTabletIcon } from '@/lib/components/ui/Header/components/icons';
import { MENU_LINKS } from '@/lib/components/ui/Header/constants/menu-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppRoute } from '@/lib/constants/app-route';
import { useInnerWidth } from '@/lib/hooks/useInnerWidth';
import { Breakpoint } from '@/lib/constants/breakpoint';

export const HeaderLaptop: React.FC = () => {
	const pathName = usePathname();
	const innerWidth = useInnerWidth();

	return (
		<header
			className={cn(
				'content-container',
				'absolute',
				'flex items-center justify-between',
				'w-full py-[24px]',
			)}
		>
			<Link href={AppRoute.Home()}>
				{innerWidth >= parseInt(Breakpoint.Lg) ? <LogoDesktopIcon /> : <LogoTabletIcon />}
			</Link>
			<nav className={cn('flex items-baseline', 'mt-[20px]')}>
				<ul className={cn('flex items-baseline gap-[34px]')}>
					{MENU_LINKS.map(({ text, href }) => (
						<li
							key={text}
							className={cn(
								'pb-[10px]',
								'text-[18px] font-normal uppercase leading-[133%] text-[#000000]',
								'lg:bg-green-200 lg:text-white',
								'hover:opacity-70',
								'transition-opacity duration-300',
								{
									'border-b-[2px] border-b-[#68B738] lg:border-b-white': pathName === href,
								},
							)}
						>
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
