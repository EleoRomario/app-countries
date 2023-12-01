import { storeCountries } from "../../../helper/store";

export const CardContinent = ({ item }) => {
	const { name, code, img: Img } = item;

	const { continent, setContinent } = storeCountries();

	const handleContinent = () => {
		setContinent({ name, code });
	};

	return (
		<button
			className={`w-full border rounded-xl h-32 flex flex-col justify-center items-center p-2  transition-colors duration-300 overflow-hidden ${
				continent?.code === code
					? "border-primary text-primary bg-primary/25"
					: "text-title-500"
			} hover:text-primary hover:border-primary `}
			onClick={handleContinent}
		>
			<div className="h-28 overflow-hidden">
				<Img />
			</div>
			<span className="font-semibold">{name}</span>
		</button>
	);
};
