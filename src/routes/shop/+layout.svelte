<script lang="ts">
	import FilterSidebar from '$lib/components/product/FilterSidebar.svelte';

	let { data, children } = $props();
</script>

<div class="flex min-h-screen flex-col p-6 md:flex-row">
	<FilterSidebar
		collections={data.collections.map((collection: any) => {
			return { handle: collection.handle, title: collection.title };
		})}
	/>
	{@render children()}
</div>
