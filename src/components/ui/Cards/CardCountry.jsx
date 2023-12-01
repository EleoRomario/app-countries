import { useEffect } from "react";
import { useUnsplash } from "../../../hooks/useUnsplash";

export const CardCountry = ({ country }) => {
	const { code, name, continent } = country;

	const { picture, searchImage } = useUnsplash();
	console.log(
		"🚀 ~ file: CardCountry.jsx:8 ~ CardCountry ~ picture:",
		picture
	);

	useEffect(() => {
		searchImage(name);
	}, []);

	return (
		<button className="rounded-xl w-52 h-52 p-3 bg-white shadow-md overflow-hidden grid grid-rows-2">
			<div className="flex flex-col overflow-hidden gap-2 relative">
				<picture className="w-full rounded-md overflow-hidden bg-gray-600">
					<img
						src={picture?.urls.small}
						alt={picture?.description}
						className="object-cover w-full h-32"
					/>
				</picture>
				<div>
					<p className="text-lg font-semibold text-title text-start truncate">
						{name}
					</p>
					<p className="text-sm font-normal text-title-200 text-start truncate">
						{continent?.name}
					</p>
				</div>
				<img
					src={`https://flagsapi.com/${code}/flat/32.png`}
					alt=""
					className="absolute top-0 left-1"
				/>
			</div>
		</button>
	);
};
