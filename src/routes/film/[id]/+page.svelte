<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let film = data.post.data[0];

	const fetchTmdb = (async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${film.tmdb_id}?api_key=9e66ae4057f19820250adee80ae7f4cb&language=fr&append_to_response=credits&language=fr`
		);
		return await response.json();
	})();
</script>

<div class="w-full h-full">
	<div class="max-w-5xl relative m-auto h-full">
		{#await fetchTmdb then data}
			<div
				class="-z-50 relative m-auto bg-center bg-cover h-96"
				style="background-image:url(https://image.tmdb.org/t/p/original{data.backdrop_path}); box-shadow: inset 5px 5px 100px 70px white, inset -5px -5px 100px 70px white;"
			></div>
			<div class="mt-[-5%] flex justify-start gap-3">
				<a href="/film/{data.id}" class="text-center flex w-1/4">
					<img
						class="border-2 rounded-md border-gray-400 hover:border-gray-700"
						src="https://image.tmdb.org/t/p/w500{data.poster_path}"
						alt={data.title}
					/>
				</a>
				<div class="ml-10 mt-4 flex flex-col w-3/4">
					<h1 class="text-3xl">{data.title}</h1>
					<p class="text-md my-4">{data.overview}</p>
				</div>
				<div class=""></div>
			</div>
		{/await}
	</div>
</div>
