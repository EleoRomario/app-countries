import {
	GET_COUNTRIES,
	GET_COUNTRY,
	GET_COUNTRY_BY_CONTINENT,
} from "../helper/graphql/queries";
import { storeCountries } from "../helper/store";
import { firstLetterUpper } from "../helper/firstLetterUpper";
import { useEffect } from "react";

export const useCountry = () => {
	const { setLoading, setError, setCountries, countries, loading, error } =
		storeCountries();

	const getCountries = async () => {
		try {
			const response = await fetch(import.meta.env.PUBLIC_API_COUNTRY, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: GET_COUNTRIES,
				}),
			});

			const json = await response.json();

			const { data } = json;

			setCountries(data?.countries.slice(0, 10));
		} catch (error) {
			setError(error);
		}
	};
	useEffect(() => {
		getCountries();
	}, []);

	const searchCountry = async (countryName) => {
		try {
			const response = await fetch(import.meta.env.PUBLIC_API_COUNTRY, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: GET_COUNTRY,
					variables: { name: `^${firstLetterUpper(countryName)}` },
				}),
			});

			const json = await response.json();

			const { data } = json;

			setCountries(data?.countries.slice(0, 10));
		} catch (error) {
			setError(error);
		}
	};

	const searchCountryByContinent = async (countryName, continentCode) => {
		try {
			const response = await fetch(import.meta.env.PUBLIC_API_COUNTRY, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					query: GET_COUNTRY_BY_CONTINENT,
					variables: {
						name: `^${firstLetterUpper(countryName)}`,
						continent: continentCode,
					},
				}),
			});

			const json = await response.json();

			const { data } = json;

			setCountries(data?.countries);
		} catch (error) {
			setError(error);
		}
	};

	return {
		data: countries,
		loading,
		error,
		searchCountry,
		getCountries,
		searchCountryByContinent,
	};
};
