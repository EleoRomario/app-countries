export const GET_COUNTRY = `
	query getCountry($name: String!) {
		countries(filter: { name: { regex: $name } }) {
			name
			code
			capital
			currency
			languages {
				code
				name
			}
			states {
				code
				name
			}
			continent {
				name
				code
			}
		}
	}
`;

export const GET_COUNTRY_BY_CONTINENT = `
	query getCountryByContinent($name: String!, $continent: String!) {
		countries(
			filter: { name: { regex: $name }, continent: { eq: $continent } }
		) {
			name
			code
			capital
			currency
			languages {
				code
				name
			}
			states {
				code
				name
			}
			continent {
				code
				name
			}
		}
	}
`;

export const GET_COUNTRIES = `
	query getCountries {
		countries {
			name
			code
			capital
			currency
			languages {
				code
				name
			}
			states {
				code
				name
			}
			continent {
				name
				code
			}
		}
	}
`;
