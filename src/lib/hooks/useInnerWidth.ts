'use client';
import { useLayoutEffect, useState } from 'react';

export const useInnerWidth = (): number => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useLayoutEffect(() => {
		const updateInnerWidth = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener('resize', updateInnerWidth);

		return () => window.removeEventListener('resize', updateInnerWidth);
	});

	return innerWidth;
};
