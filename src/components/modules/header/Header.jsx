import { useState } from "react";
import { Africa, America, Asia, Europe, Oceania } from "../../icons/Continents";
import { Search } from "../../icons/Search";
import { Trash } from "../../icons/Trash";
import { CardContinent } from "./CardContinent";
import { useCountry } from "../../../hooks/useCountry";
import { storeCountries } from "../../../helper/store";

const continents = [
	{
		name: "Africa",
		code: "AF",
		img: Africa,
	},
	{
		name: "América",
		code: "AM",
		img: America,
	},
	{
		name: "Asia",
		code: "AS",
		img: Asia,
	},
	{
		name: "Europe",
		code: "EU",
		img: Europe,
	},
	{
		name: "Oceania",
		code: "OC",
		img: Oceania,
	},
];

export const Header = () => {
	const [show, setShow] = useState(false);
	const [country, setCountry] = useState("");

	const handleCountry = (e) => {
		setCountry(e.target.value);
	};

	const handleShow = () => {
		setShow(!show);
	};

	const { searchCountry } = useCountry();

	const handleSearch = () => {
		searchCountry(country);
	};

	return (
		<div className="w-full h-20 flex justify-center items-center border-b relative">
			<div className="w-1/2 h-10 rounded-xl shadow-sm flex px-3 items-center bg-white">
				<input
					type="text"
					value={country}
					name="country"
					className="w-full border-none focus:outline-none active:outline-none"
					placeholder="Search for a country..."
					onChange={handleCountry}
					onClick={handleShow}
					autoComplete="off"
				/>
				<button
					className="text-title-200 hover:text-primary flex gap-2"
					onClick={handleSearch}
				>
					<Search />
				</button>
			</div>
			{show && (
				<div className="flex justify-center w-full absolute top-16 z-10">
					<div
						className="bg-white shadow-sm w-1/2 rounded-xl p-4 flex flex-col gap-4"
						onMouseLeave={handleShow}
					>
						<header className="flex justify-between items-center">
							<h1 className="font-semibold">Filter by Region</h1>
							<button className="text-title-200 hover:text-primary flex gap-2">
								Clear
								<Trash />
							</button>
						</header>
						<div className="grid grid-cols-3 grid-rows-2 gap-2">
							{continents.map((item) => (
								<CardContinent key={item.code} item={item} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
