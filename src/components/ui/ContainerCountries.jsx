import { useCountry } from "../../hooks/useCountry";
import { CardCountry } from "./Cards/CardCountry";

export const ContainerCountries = () => {
	const { data, loading, error } = useCountry();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex gap-4 flex-wrap">
			{data.map((country) => (
				<CardCountry key={country.code} country={country} />
			))}
			{data.length === 0 && (
				<div className="w-full h-96 flex justify-center items-center">
					<h1 className="text-2xl text-title-200">No results</h1>
				</div>
			)}
		</div>
	);
};
