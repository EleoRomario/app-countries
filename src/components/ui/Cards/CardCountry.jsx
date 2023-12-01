import { useEffect, useState } from "react";
import { useUnsplash } from "../../../hooks/useUnsplash";
import { storeCountries } from "../../../helper/store";
import { World } from "../../icons/World";
import { AddFavorite } from "../buttons/AddFavorite";

export const CardCountry = ({ country }) => {
	const { code, name, continent } = country;

	const { picture, searchImage } = useUnsplash();

	const { setCountry } = storeCountries();

	useEffect(() => {
		searchImage(name);
	}, []);

	const handleClick = () => {
		setCountry(country);
	};

	return (
		<button
			className={`rounded-2xl w-52 h-52 bg-white overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out group border-2 hover:border-white relative`}
			onClick={handleClick}
		>
			<div className="flex flex-col overflow-hidden gap-2 relative h-52 w-full">
				<picture className="w-full h-full rounded-md overflow-hidden absolute top-0 bottom-0 left-0 right-0 bg-white">
					<img
						src={picture?.urls.small}
						alt={picture?.description}
						className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 ease-in-out"
					/>
				</picture>
				<div
					className="absolute bottom-0 left-0 h-20 p-4 w-full"
					style={{
						// backgroundColor: picture?.color,
						backgroundImage: `linear-gradient(to top, ${picture?.color} 0%, rgba(0,0,0,0) 100%)`,
						// backdropFilter: "blur(10px)",
					}}
				>
					<p className="text-lg font-semibold text-white text-start truncate">
						{name}
					</p>
					<p className="text-sm font-normal text-start truncate flex gap-2 text-white">
						<World />
						{continent?.name}
					</p>
				</div>
				<figure className="absolute top-2 left-2 w-8 h-5 overflow-hidden border border-white rounded-md">
					<img
						src={`https://flagsapi.com/${code}/flat/32.png`}
						alt=""
						className="object-cover w-full h-full"
					/>
				</figure>
			</div>
			<AddFavorite className="absolute top-2 right-2" />
		</button>
	);
};
