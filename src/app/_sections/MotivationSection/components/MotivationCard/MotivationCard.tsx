import React from 'react';
import Link from 'next/link';

import { IconArrow } from '@/app/_sections/MotivationSection/assets/icons';
import { cn } from '@/lib/utils/cn';

import './MotivationCard.css';

import { MotivationCardProps } from '@/app/_sections/MotivationSection/components/MotivationCard/types/motivation-card-props';

export const MotivationCard: React.FC<MotivationCardProps> = ({
	title,
	icon,
	text,
	linkText,
	linkHref,
}) => {
	return (
		<article
			className={cn(
				'grid-areas items-center',
				'p-[22px]',
				'md:p-[76px_62px_52px_52px]',
				'bg-[#f2f2f2]',
			)}
		>
			<div className={cn('area-image svg-container', 'h-[54px]', 'md:h-[210px]', 'xl:h-[106px]')}>
				{icon}
			</div>
			<h3
				className={cn(
					'area-title',
					'ml-[20px]',
					'md:ml-0',
					'xl:ml-[62px]',
					'text-[24px] font-normal uppercase leading-[154%]',
					'md:text-[36px] md:leading-none',
				)}
			>
				{title}
			</h3>
			<p
				className={cn(
					'area-text',
					'mt-[22px] border-b border-b-[#D9D9D9] pb-[24px]',
					'md:self-start',
					'md:border-none md:pb-0',
					'xl:mt-[40px]',
					'font-arial text-[14px] text-[#444]',
					'leading-[150%] md:text-[16px]',
				)}
			>
				{text}
			</p>
			<Link
				href={linkHref}
				className={cn(
					'area-link',
					'flex items-center gap-[16px]',
					'mt-[16px]',
					'md:mt-0',
					'xl:mt-[24px]',
					'transition-opacity duration-300 hover:opacity-80 active:opacity-30',
				)}
			>
				<span
					className={cn(
						'text-[16px] font-normal uppercase leading-none text-black',
						'md:text-[20px]',
					)}
				>
					{linkText}
				</span>
				<IconArrow />
			</Link>
		</article>
	);
};
