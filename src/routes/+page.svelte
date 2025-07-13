<script lang="ts">
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import ProductCard from '$lib/components/product/ProductCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log('Page Props:', data);
</script>

<HeroSlider
	slides={data.collections.map((collection: any) => ({
		image: collection.image?.url || '/img/placeholder.png',
		title: collection.title,
		description: collection.description || 'No description available.',
		link: `/shop/${collection.handle}`
	}))}
/>
<div class="border-b mb-10 border-gray-200 bg-gray-50 p-4 text-center">
	<h1 class="text-2xl font-bold">Welcome to Our Store</h1>
	<p class="text-gray-600">Explore our latest collections and products.</p>
</div>
<div class="flex  flex-wrap gap-4 items-center w-[70vw] m-auto justify-center p-4">
	{#each data.products as product}
		<ProductCard
			product={{
				title: product.title,
				price: {
					amount: product.priceRange.minVariantPrice.amount,
					currencyCode: product.priceRange.minVariantPrice.currencyCode
				},
				description: product.description,
				images: ['/img/product-placeholder.png', '/img/product-placeholder.png', '/img/product-placeholder.png'],
				variants: []
			}}
		/>
	{/each}
</div>

<div>
	<div class="text-center mt-10">
		<a href="/shop" class="rounded-md border-2 border-black px-6 py-2 font-semibold text-black transition duration-300 hover:bg-black hover:text-white">Explore More</a>
	</div>
</div>
