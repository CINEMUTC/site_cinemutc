<script lang="ts">
	export let tmdb_id: number;
	const fetchImage = (async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=9e66ae4057f19820250adee80ae7f4cb&language=fr&append_to_response=credits&language=fr`
		);
		return await response.json();
	})();
</script>

{#await fetchImage then data}
	<a href="/film/{data.id}" class="w-44 text-center mx-2">
		<img
			class="border-2 rounded-xl border-gray-400 hover:border-gray-700"
			src="https://image.tmdb.org/t/p/w500{data.poster_path}"
			alt={data.title}
		/>
	</a>
{/await}
