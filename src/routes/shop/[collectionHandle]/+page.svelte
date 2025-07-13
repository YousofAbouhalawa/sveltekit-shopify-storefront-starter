<script lang="ts">
	import ProductCard from '$lib/components/product/ProductCard.svelte';

	let { data } = $props();
</script>

<div>
	<div class="text-2xl font-bold m-4">
		{data.collectionTitle}
	</div>
	<div class="flex flex-wrap gap-4 p-4">
		{#each data.products as product}
			<ProductCard
				product={{
					title: product.title,
					price: {
						amount: product.priceRange.minVariantPrice.amount,
						currencyCode: product.priceRange.minVariantPrice.currencyCode
					},
					description: product.description,
					images: [
						'/img/product-placeholder.png',
						'/img/product-placeholder.png',
						'/img/product-placeholder.png'
					],
					variants: []
				}}
			/>
		{/each}
	</div>
</div>
