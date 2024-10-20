import React from 'react';

export const FbIcon: React.FC = ({ ...props }) => {
	return (
		<svg
			width="28"
			height="33"
			viewBox="0 0 28 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M21 2.75H17.5C15.9529 2.75 14.4692 3.46024 13.3752 4.72447C12.2813 5.98871 11.6667 7.70337 11.6667 9.49127V13.536H8.16669V18.929H11.6667V29.7151H16.3334V18.929H19.8334L21 13.536H16.3334V9.49127C16.3334 9.13369 16.4563 8.79076 16.6751 8.53791C16.8939 8.28506 17.1906 8.14302 17.5 8.14302H21V2.75Z"
				stroke="#666666"
				strokeWidth="1.1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
