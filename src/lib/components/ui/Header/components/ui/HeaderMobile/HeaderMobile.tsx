'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { MenuButton } from '@/lib/components/ui/Header/components/ui/HeaderMobile/components/MenuButton';
import { MobileMenu } from '@/lib/components/ui/Header/components/ui/HeaderMobile/components/MobileMenu';
import { LogoMobileIcon, LogoMobileTextIcon } from '@/lib/components/ui/Header/components/icons';

export const HeaderMobile: React.FC = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<header
			className={cn(
				'relative',
				'flex items-center justify-between',
				'px-[20px] pb-[18px] pt-[10px]',
			)}
		>
			<LogoMobileIcon />
			<LogoMobileTextIcon />
			<MenuButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
			{isMenuOpened && <MobileMenu />}
		</header>
	);
};
