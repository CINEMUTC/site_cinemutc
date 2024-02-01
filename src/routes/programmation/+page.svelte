<script lang="ts">
	import CarteFilm from './CarteFilm.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let films = data.films.slice().reverse();
</script>

<div class="w-full h-full">
	<div class="max-w-4xl relative m-auto">
		<h1 class="my-4 text-5xl">la ville</h1>
		<p>
			ce cycle de projection est dédié à l'exploration cinématographique de la ville. À travers une
			sélection éclectique de films, nous plongerons dans les diverses façons dont les cinéastes
			capturent, interprètent et exploitent le décor urbain comme personnage à part entière.<br
			/><br /> Des ruelles pittoresques de "Amélie Poulain" à l'effervescence trépidante de "Made in
			Hongkong", en passant par les méandres architecturaux de "Playtime", chaque film offre une perspective
			unique sur la vie citadine. Ces œuvres explorent la ville en tant que reflet de la société, terrain
			de jeu de l'humour, cadre de quêtes épiques, ou encore toile de fond pour les drames et les intrigues.
			Joignez-vous à nous pour un voyage cinématographique captivant au cœur des métropoles, où les rues
			et les buildings deviennent le canevas sur lequel se dessinent des histoires inoubliables.
		</p>
		<h2>Les films projetés:</h2>
	</div>
	<div class="my-8 flex justify-center">
		{#each films as film}
			<CarteFilm tmdb_id={film.tmdb_id} />
		{/each}
	</div>
</div>
