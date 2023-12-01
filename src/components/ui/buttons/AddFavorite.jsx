export const AddFavorite = ({ className, size = "w-6 h-6" }) => {
	return (
		<button className={`${className} text-white hover:text-red-500 `}>
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				className={size}
			>
				<path
					className="fill-current"
					d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83l-.757.684Z"
				/>
			</svg>
		</button>
	);
};
