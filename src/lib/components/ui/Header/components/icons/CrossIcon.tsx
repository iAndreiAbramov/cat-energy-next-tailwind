import React from 'react';

export const CrossIcon: React.FC = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="none"
			viewBox="0 0 20 20"
			{...props}
		>
			<path
				stroke="#000"
				strokeWidth="1.5"
				d="M0-.75h24.758"
				transform="matrix(.68659 -.72705 .68659 .72705 2.002 20)"
			/>
			<path
				stroke="#000"
				strokeWidth="1.5"
				d="M0-.75h24.758"
				transform="matrix(.68659 .72705 -.68659 .72705 1 2)"
			/>
		</svg>
	);
};