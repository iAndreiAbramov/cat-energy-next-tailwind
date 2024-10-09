'use client';

import React from 'react';
import { useInnerWidth } from '@/lib/hooks/useInnerWidth';
import { Breakpoint } from '@/lib/constants/breakpoint';
import { HeaderLaptop } from '@/lib/components/ui/Header/components/ui/HeaderLaptop';
import { HeaderMobile } from '@/lib/components/ui/Header/components/ui/HeaderMobile';

export const Header: React.FC = () => {
	const innerWidth = useInnerWidth();
	return <>{innerWidth >= parseInt(Breakpoint.Md) ? <HeaderLaptop /> : <HeaderMobile />}</>;
};
