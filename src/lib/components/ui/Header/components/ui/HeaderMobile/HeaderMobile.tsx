'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { MenuButton } from '@/lib/components/ui/Header/components/ui/HeaderMobile/components/MenuButton';
import { MobileMenu } from '@/lib/components/ui/Header/components/ui/HeaderMobile/components/MobileMenu';
import { LogoMobileIcon, LogoMobileTextIcon } from '@/lib/components/ui/Header/components/icons';
import { AppRoute } from '@/lib/constants/app-route';

export const HeaderMobile: React.FC = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<header
			className={cn(
				'content-container',
				'absolute inset-x-0 top-0 z-10',
				'flex items-center justify-between',
				'md:display-none',
				'w-full pb-[18px] pt-[10px]',
			)}
		>
			<Link href={AppRoute.Home()}>
				<LogoMobileIcon />
			</Link>
			<Link href={AppRoute.Home()}>
				<LogoMobileTextIcon />
			</Link>
			<MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
			{isMenuOpened && <MobileMenu />}
		</header>
	);
};
