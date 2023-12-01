import { storeCountries } from "../../../helper/store";

export const OpenSidebar = () => {
	const { open, setOpen } = storeCountries();

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<button
			onClick={handleOpen}
			className="absolute md:hidden flex top-5 -right-10 rounded-ee-md rounded-se-md  w-10 h-10  flex-col gap-1 justify-center items-center text-title-200 hover:text-primary bg-ligth"
		>
			<div className="relative w-full h-full">
				<span
					className={`${
						open ? "rotate-45 w-6" : "rotate-0 w-5 "
					} h-0.5 bg-title absolute top-3 left-[10px] transition-transform duration-300 origin-top-left`}
				/>
				<span
					className={`${
						open ? "w-0" : "w-6"
					} h-0.5 bg-title absolute top-5 left-2`}
				/>
				<span
					className={`${
						open ? "-rotate-45 w-6" : "rotate-0 w-5 "
					} h-0.5 bg-title absolute top-7 left-[10px] transition-transform duration-300 origin-bottom-left`}
				/>
			</div>
		</button>
	);
};
