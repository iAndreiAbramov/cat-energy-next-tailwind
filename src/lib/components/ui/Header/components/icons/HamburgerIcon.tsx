import React from 'react';

export const HamburgerIcon: React.FC = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="18"
			fill="none"
			viewBox="0 0 24 18"
			{...props}
		>
			<path stroke="#000" strokeWidth="1.5" d="M0 1.25h24m-24 8h24m-24 8h24" />
		</svg>
	);
};
