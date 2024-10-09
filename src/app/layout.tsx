import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { Header } from '@/lib/components/ui';
import { ReactNode } from 'react';

import './globals.css';
import { cn } from '@/lib/utils/cn';

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
				{children}
			</body>
		</html>
	);
}
