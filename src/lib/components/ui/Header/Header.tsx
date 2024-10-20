'use client';
import React from 'react';
import { HeaderDesktop } from '@/lib/components/ui/Header/components/ui/HeaderLaptop';
import { HeaderMobile } from '@/lib/components/ui/Header/components/ui/HeaderMobile';

export const Header: React.FC = () => {
	return (
		<>
			<HeaderDesktop />
			<HeaderMobile />
		</>
	);
};
