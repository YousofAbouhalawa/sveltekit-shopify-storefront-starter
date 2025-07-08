<script lang="ts">
	import CartModal from '$lib/components/CartModal.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />
<main>
	<CartModal isOpen={true} items={[]} />
	{@render children()}
</main>
<Footer />
