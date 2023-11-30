export const CardContinent = ({ item }) => {
	const { name, code, img: Img } = item;

	return (
		<button className="w-full border rounded-xl h-32 flex flex-col justify-center items-center p-2 text-title-500 hover:text-primary hover:border-primary transition-colors duration-300">
			<div className="h-28 overflow-hidden">
				<Img />
			</div>
			<span className="font-semibold">{name}</span>
		</button>
	);
};
