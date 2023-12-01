import { useState } from "react";
import { unsplash } from "../helper/api/unsplash";

export const useUnsplash = () => {
	const [picture, setPicture] = useState(null);

	const searchImage = async (query) => {
		try {
			unsplash.search
				.getPhotos({
					query,
					page: 1,
				})
				.then((result) => {
					if (result.errors) {
						console.log("error occurred: ", result.errors[0]);
					} else {
						setPicture(result.response.results[0]);
					}
				});
		} catch (error) {
			console.error(error);
		}
	};

	return { picture, searchImage };
};
