import { createApi } from "unsplash-js";

export const unsplash = createApi({
	accessKey: import.meta.env.PUBLIC_UNSPLASH_ACCESS_KEY,
});
