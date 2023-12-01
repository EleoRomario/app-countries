import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_COUNTRIES, GET_COUNTRY } from "../helper/graphql/queries";
import { storeCountries } from "../helper/store";
import { firstLetterUpper } from "../helper/firstLetterUpper";
import { useEffect } from "react";

const client = new ApolloClient({
	uri: import.meta.env.PUBLIC_API_COUNTRY,
	cache: new InMemoryCache(),
});

export const useCountry = () => {
	const { setLoading, setError, setCountries, countries, loading, error } =
		storeCountries();

	useEffect(() => {
		const getCountries = async () => {
			try {
				const { data, loading, error } = await client.query({
					query: GET_COUNTRIES,
				});
				setCountries(data?.countries.slice(0, 10));
				setLoading(loading);
				setError(error);
			} catch (error) {
				setError(error);
			}
		};
		getCountries();
	}, []);

	const searchCountry = async (countryName) => {
		try {
			const { data, loading, error } = await client.query({
				query: GET_COUNTRY,
				variables: { name: `^${firstLetterUpper(countryName)}` },
			});
			setCountries(data?.countries.slice(0, 10));
			setLoading(loading);
			setError(error);
		} catch (error) {
			setError(error);
		}
	};

	return {
		data: countries,
		loading,
		error,
		searchCountry,
	};
};
