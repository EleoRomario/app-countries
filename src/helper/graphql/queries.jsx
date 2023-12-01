import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
	query getCountry($name: String!) {
		countries(filter: { name: { regex: $name } }) {
			code
			name
			continent {
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
			}
		}
	}
`;
