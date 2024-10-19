'use client';
import React from 'react';
import { cn } from '@/lib/utils/cn';
import { MobileSlider } from '@/app/_sections/ExampleSection/components/ui/MobileSlider';
import { DesktopSlider } from '@/app/_sections/ExampleSection/components/ui/DesktopSlider';
import { useInnerWidth } from '@/lib/hooks/useInnerWidth';
import { Breakpoint } from '@/lib/constants/breakpoint';

import './ExampleSection.css';

export const ExampleSection: React.FC = () => {
	const innerWidth = useInnerWidth();

	return (
		<section
			className={cn(
				'section-grid content-container',
				'pb-[40px] pt-[24px]',
				'bg-[#EAEAEA]',
				'md:bg-gradient-to-b md:from-[#FFFFFF] md:from-[58%] md:via-[#EAEAEA] md:via-[58%] md:to-[#EAEAEA]',
				'xl:bg-gradient-to-b xl:from-[#FFFFFF] xl:from-[30%] xl:via-[#EAEAEA] xl:via-[30%] xl:to-[#EAEAEA]',
			)}
		>
			<h2
				className={cn(
					'area-title',
					'text-[36px]/[111%] font-normal text-black',
					'md:text-[60px]/[100%]',
				)}
			>
				Живой пример
			</h2>
			<p
				className={cn(
					'area-text',
					'mt-[40px]',
					'md:mt-[64px]',
					'xl:mt-[146px]',
					'font-arial text-[14px]/[130%] text-[#444]',
					'md:text-[16px]/[150%]',
				)}
			>
				Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim.
				Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и
				по-прежнему спит по 16 часов в день.
			</p>
			<dl className={cn('dl-grid-layout area-list', 'mt-[20px]', 'md:mt-[54px]', 'xl:mt-[68px]')}>
				<div className={cn('first-area bordered-item')}>
					<dd className={cn('bordered-item_description')}>5&nbsp;КГ</dd>
					<dt className={cn('bordered-item_title')}>снижение веса</dt>
				</div>
				<div className={cn('second-area bordered-item')}>
					<dd className={cn('bordered-item_description')}>60&nbsp;ДНЕЙ</dd>
					<dt className={cn('bordered-item_title')}>затрачено времени</dt>
				</div>
				<div
					className={cn(
						'third-area',
						'flex gap-1',
						'md:flex-col md:items-end md:gap-2 md:justify-self-end',
						'xl:flex-row xl:justify-between xl:justify-self-center',
						'xl:w-full',
						'text-[16px]/[125%] uppercase',
						'md:text-[20px]/[100%]',
					)}
				>
					<dt>Затраты на питание:</dt>
					<dd className={cn('xl:mr-[48px]')}>15 000 РУБ.</dd>
				</div>
			</dl>
			{innerWidth && <>{innerWidth >= Breakpoint.Md ? <DesktopSlider /> : <MobileSlider />}</>}
		</section>
	);
};
