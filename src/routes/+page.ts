import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/10227?api_key=9e66ae4057f19820250adee80ae7f4cb&language=fr&append_to_response=credits&language=fr`);
	const item = await res.json();
	return { item };
};