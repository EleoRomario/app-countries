import { useEffect, useState } from "react";
import { storeCountries } from "../../helper/store";
import { useUnsplash } from "../../hooks/useUnsplash";

export const DetailCountry = () => {
	const { country } = storeCountries();

	const { picture, searchImage } = useUnsplash();

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!!country) {
			searchImage(country.name);
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [country]);

	return (
		<div
			className={`${
				open ? "w-[500px]" : "w-0"
			} relative flex flex-col h-full overflow-y-auto`}
		>
			<figure className="w-full h-52 ">
				<img
					src={picture?.urls?.regular}
					alt={picture?.description}
					className="w-full h-full object-cover"
				/>
			</figure>
			<div className="relative w-full flex flex-col flex-1 p-4">
				<div className="flex gap-3">
					<img
						src={`https://flagsapi.com/${country?.code}/flat/64.png`}
						alt=""
						className="w-16 h-16"
					/>
					<div>
						<h1 className="text-title text-2xl font-bold">
							{country?.name}
						</h1>
						<span className="italic text-title-200">
							{country?.continent?.name}
						</span>
					</div>
				</div>
				<div className="flex gap-2">
					<ul>
						<li>
							<span className="text-title-500 font-medium">
								Capital:
							</span>{" "}
							<span className="text-title-500">
								{country?.capital}
							</span>
						</li>
						<li>
							<span className="text-title-500 font-medium">
								Language:
							</span>{" "}
							<span className="text-title-500">
								{country?.languages
									?.map((lang) => lang.name)
									.join(", ")}
							</span>
						</li>
						<li>
							<span className="text-title-500 font-medium">
								Currency:
							</span>{" "}
							<span className="text-title-500">
								{country?.currency}
							</span>
						</li>
						<li>
							<span className="text-title-500 font-medium">
								States:
							</span>{" "}
							<span className="text-title-500">
								{country?.states
									?.map((state) => state.name)
									.join(", ")}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<button
				className="absolute top-3 right-3 rounded-full bg-white/60 p-2 "
				onClick={() => setOpen(false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-title"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	);
};
