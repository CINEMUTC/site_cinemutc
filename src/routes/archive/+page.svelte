<script lang="ts">
	import CarteFilm from './CarteFilm.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let films = data.films.slice().reverse();
	console.log(films);
</script>

<div class="flex flex-wrap gap-8 m-8 items-stretch justify-center">
	{#each films as film}
		<CarteFilm tmdb_id={film.tmdb_id} />
	{/each}
</div>
