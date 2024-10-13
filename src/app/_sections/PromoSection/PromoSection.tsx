import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/lib/components/ui';
import imageCanDesktop from './assets/images/index-can-desktop.png';
import Image from 'next/image';

import './PromoSection.css';

export const PromoSection: React.FC = () => {
	return (
		<section
			className={cn(
				'content-container promo-section-bg',
				'flex flex-col items-center',
				'pb-[20px] pt-[28px]',
				'md:min-h-[860px]',
				'xl:min-h-[696px]',
			)}
		>
			<h1
				className={cn(
					'text-center text-[36px] font-normal leading-none text-white',
					'md:self-start',
					'md:ml-[10%] md:w-[420px]',
					'leading-none md:text-[60px]',
					'md:text-left md:text-black',
					'xl:ml-[80px] xl:mt-[100px]',
				)}
			>
				Функциональное питание для котов
			</h1>
			<span
				className={cn(
					'with-text-shadow',
					'mb-[20px] mt-[28px]',
					'text-uppercase text-center font-[14px] text-white',
					'md:self-start',
					'mb-[50px] mt-[40px] md:ml-[10%]',
					'md:text-[20px] md:text-black',
					'xl:ml-[80px]',
				)}
			>
				<style>
					{`@media (min-width: 768px) and (max-width: 1279px) {
							.with-text-shadow {
								text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
							}
						}`}
				</style>
				Занялся собой? Займись котом!
			</span>
			<div
				className={cn(
					'h-[270px] w-[280px]',
					'md:absolute md:top-[230px] md:z-[-1]',
					'md:h-[610px] md:w-[710px]',
					'xl:right-[23%] xl:z-20',
					'xl:h-[500px] xl:w-[552px]',
				)}
			>
				<Image
					src={imageCanDesktop}
					alt="cup"
					width={280}
					height={270}
					sizes="(max-width: 768px) 280px, (max-width: 1280px) 710px, 552px"
					style={{ objectFit: 'contain', width: '100%', height: '100%' }}
				/>
			</div>
			<Button
				className={cn(
					'h-[40px] w-full',
					'text-[14px]',
					'md:ml-[10%] md:self-start',
					'h-[54px] md:w-[244px] md:border-[1px] md:border-[#000000]',
					'md:text-[20px]',
					'xl:ml-[80px] xl:border-none',
				)}
				variant="primary"
				text="подобрать программу"
			/>
		</section>
	);
};
