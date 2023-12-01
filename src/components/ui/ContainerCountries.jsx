import { useEffect } from "react";
import { useCountry } from "../../hooks/useCountry";
import { CardCountry } from "./Cards/CardCountry";

export const ContainerCountries = () => {
	const { data, loading, error } = useCountry();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex gap-2 flex-wrap">
			{data.map((country) => (
				<CardCountry key={country.code} country={country} />
			))}
		</div>
	);
};
