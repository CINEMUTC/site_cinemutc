<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	// CHANGER LE TYPE ANY
	let crew = data.item.credits.crew;
	let dir = crew.filter(({ job }: any) => job === 'Director');
	let directors = '';
	dir.forEach((element: any) => {
		if (directors == '') {
			directors += element.name;
		} else {
			directors += ', ' + element.name;
		}
	});
</script>

<a
	href="/film/{data.item.id}"
	class="bg-center bg-cover shadow-[inset_1000px_1000px_rgba(0,0,0,0.3)] h-full"
	style="background-image:url(https://image.tmdb.org/t/p/original{data.item.backdrop_path})"
>
	<h1 class="text-white m-10 text-5xl">{data.item.title}</h1>
	<p class="text-white m-10 bottom-0 left-0 absolute">
		réalisé par {directors}<br />{data.item.release_date.substring(0, 4)}<br /><br />mercredi 20
		septembre<br />fa205
	</p>
</a>

<style lang="postcss"></style>
