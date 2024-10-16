'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import * as Slider from '@radix-ui/react-slider';

import fatCat from '@/app/_sections/ExampleSection/assets/images/cat-fat@2x.png';
import skinnyCat from '@/app/_sections/ExampleSection/assets/images/cat-skinny@2x.png';

import './MobileSlider.css';

export const MobileSlider: React.FC = () => {
	const [sliderValue, setSliderValue] = useState([0]);

	return (
		<div className={cn('flex flex-col items-center')}>
			<div className={cn('relative', 'flex flex-col', 'h-[232px] w-[280px]')}>
				<div
					className={cn('absolute inset-0 z-0', {
						hidden: sliderValue[0] === 100,
					})}
				>
					<Image
						src={fatCat}
						width={280}
						height={232}
						alt="Fat cat"
						className={cn('slider-image')}
					/>
				</div>
				<div
					className={cn('absolute inset-0 z-0', {
						hidden: sliderValue[0] === 0,
					})}
				>
					<Image
						src={skinnyCat}
						width={280}
						height={232}
						alt="Skinny cat"
						className={cn('slider-image')}
					/>
				</div>
			</div>
			<div className={cn('content-container', 'flex justify-center gap-[14px]', 'mt-[16px]')}>
				<button className={cn('slider-text')} onClick={() => setSliderValue([0])}>
					Было
				</button>
				<Slider.Root
					defaultValue={[0]}
					step={100}
					value={sliderValue}
					onValueChange={(value) => setSliderValue(value)}
					className={cn('relative', 'flex items-center')}
				>
					<Slider.Track
						className={cn(
							'h-[14px] w-[86px] rounded-[6px] border-[1px] border-[#cdcdcd]',
							'bg-white',
							'cursor-pointer',
						)}
					>
						<Slider.Range />
					</Slider.Track>
					<Slider.Thumb
						className={cn(
							'relative',
							'block h-[6px] w-[36px] rounded-full border-none bg-[#68b738]',
							'focus-visible:outline-none',
							'cursor-pointer',
							{
								'left-1': sliderValue[0] === 0,
								'right-1': sliderValue[0] === 100,
							},
						)}
					/>
				</Slider.Root>
				<button className={cn('slider-text')} onClick={() => setSliderValue([100])}>
					стало
				</button>
			</div>
		</div>
	);
};
