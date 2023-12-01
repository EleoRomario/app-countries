import { create } from "zustand";

export const storeCountries = create((set) => ({
	loading: false,
	error: null,
	countries: [],
	country: null,
	continent: {},
	open: false,
	setOpen: (open) => set((state) => ({ open })),
	setCountry: (country) => set((state) => ({ country })),
	setCountries: (countries) => set((state) => ({ countries })),
	setLoading: (loading) => set((state) => ({ loading })),
	setError: (error) => set((state) => ({ error })),
	setContinent: (continent) => set((state) => ({ continent })),
}));
