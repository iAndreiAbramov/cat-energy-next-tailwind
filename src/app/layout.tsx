import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { Footer, Header } from '@/lib/components/ui';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

import './globals.css';

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
};

const oswald = Oswald({
	display: 'swap',
	variable: '--font-oswald',
	subsets: ['cyrillic'],
	weight: ['400', '500'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(`${oswald.variable} antialiased`)}>
				<Header />
				<main className={cn('pt-[65px]', 'w-full md:pt-[108px]')}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
