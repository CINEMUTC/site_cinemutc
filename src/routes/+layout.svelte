<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<div class="lowercase flex flex-col h-screen">
	<Navbar />
	<slot />
</div>
