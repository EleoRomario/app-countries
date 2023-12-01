import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
	query getCountry($name: String!) {
		countries(filter: { name: { regex: $name } }) {
			code
			name
			continent {
				name
				code
			}
		}
	}
`;

export const GET_COUNTRY_BY_CONTINENT = gql`
	query getCountryByContinent($name: String!, $continent: String!) {
		countries(
			filter: { name: { regex: $name }, continent: { eq: $continent } }
		) {
			name
			code
			continent {
				code
				name
			}
		}
	}
`;

export const GET_COUNTRIES = gql`
	query getCountries {
		countries {
			code
			name
			continent {
				name
				code
			}
		}
	}
`;
