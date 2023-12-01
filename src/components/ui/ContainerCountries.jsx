import { useCountry } from "../../hooks/useCountry";
import { CardCountry } from "./Cards/CardCountry";

export const ContainerCountries = () => {
	const { data, loading, error } = useCountry();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="gap-4 w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-center items-center">
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
