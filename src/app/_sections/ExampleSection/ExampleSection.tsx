import React from 'react';
import { cn } from '@/lib/utils/cn';

import './ExampleSection.css';
import { MobileSlider } from '@/app/_sections/ExampleSection/components/ui/Slider';

export const ExampleSection: React.FC = () => {
	return (
		<section className={cn('pb-[40px] pt-[24px]', 'bg-[#EAEAEA]')}>
			<h2 className={cn('content-container', 'text-[36px]/[111%] font-normal text-black')}>
				Живой пример
			</h2>
			<p
				className={cn(
					'content-container',
					'mt-[40px]',
					'font-arial text-[14px]/[130%] text-[#444]',
				)}
			>
				Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim.
				Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и
				по-прежнему спит по 16 часов в день.
			</p>
			<dl className={cn('content-container dl-grid-layout', 'mt-[20px]')}>
				<div className={cn('first-area bordered-item')}>
					<dd className={cn('bordered-item_description')}>5&nbsp;КГ</dd>
					<dt className={cn('bordered-item_title')}>снижение веса</dt>
				</div>
				<div className={cn('second-area bordered-item')}>
					<dd className={cn('bordered-item_description')}>60&nbsp;ДНЕЙ</dd>
					<dt className={cn('bordered-item_title')}>затрачено времени</dt>
				</div>
				<div className={cn('third-area', 'flex gap-1', 'uppercase')}>
					<dt>Затраты на питание:</dt>
					<dd>15 000 РУБ.</dd>
				</div>
			</dl>
			<MobileSlider />
		</section>
	);
};
