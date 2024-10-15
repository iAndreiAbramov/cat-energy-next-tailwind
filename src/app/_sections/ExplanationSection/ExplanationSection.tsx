import React from 'react';
import { cn } from '@/lib/utils/cn';
import FirstIcon from '@/app/_sections/ExplanationSection/assets/icons/first-icon.svg';
import SecondIcon from '@/app/_sections/ExplanationSection/assets/icons/second-icon.svg';
import ThirdIcon from '@/app/_sections/ExplanationSection/assets/icons/third-icon.svg';
import FourthIcon from '@/app/_sections/ExplanationSection/assets/icons/fourth-icon.svg';
import { ExplanationItem } from '@/app/_sections/ExplanationSection/components/ExplanationItem';
import { ExplanationText } from '@/app/_sections/ExplanationSection/constants/explanation-text';

export const ExplanationSection: React.FC = () => {
	return (
		<section
			className={cn(
				'content-container',
				'pb-[26px] pt-[20px]',
				'md:border-b-[1px] md:border-b-[#E6E6E6] md:py-[46px]',
			)}
		>
			<h2 className={cn('mb-[40px] md:mb-[32px]', 'text-[36px]/[110%] md:text-[60px]/[100%]')}>
				Как это работает
			</h2>
			<div
				className={cn(
					'grid gap-y-[20px]',
					'md:grid-cols-2 md:gap-x-[150px] md:gap-y-[40px]',
					'xl:grid-cols-4 xl:justify-between xl:gap-[94px]',
				)}
			>
				<ExplanationItem text={ExplanationText.First} bgText="1" icon={<FirstIcon />} />
				<ExplanationItem text={ExplanationText.Second} bgText="2" icon={<SecondIcon />} />
				<ExplanationItem text={ExplanationText.Third} bgText="3" icon={<ThirdIcon />} />
				<ExplanationItem text={ExplanationText.Fourth} bgText="4" icon={<FourthIcon />} />
			</div>
		</section>
	);
};
