<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<div class="bg-slate-100">
	<Header />
	<main class="min-h-screen w-full">
		{@render children()}
	</main>
	<Footer />
</div>
