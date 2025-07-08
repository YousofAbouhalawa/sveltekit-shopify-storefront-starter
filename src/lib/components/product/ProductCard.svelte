<script lang="ts">
	import { expand } from '$lib/transitions/expand';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	import QuantityCounter from './QuantityCounter.svelte';
	import VariantSelect from './VariantSelect.svelte';

	export let product = {
		title: 'Sample Product',
		price: '$29.99',
		description: 'This is a great product with amazing features and benefits.',
		image: '/img/product-placeholder.png',
		variants: ['Small', 'Medium', 'Large']
	};

	let expanded = false;
	const toggleExpand = () => (expanded = !expanded);

	let selectedVariant = product.variants[0];
	let quantity = 1;

	const addToCart = () => {
		alert(`Added ${quantity} x ${product.title} (${selectedVariant}) to cart`);
	};

	const buyNow = () => {
		alert(`Buying ${quantity} x ${product.title} (${selectedVariant})`);
	};
</script>

<!-- Product Card -->
 <div>
<div
	role="button"
	tabindex="0"
	class="relative flex cursor-pointer flex-col items-center overflow-visible rounded-xl border border-gray-300 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg"
	style="min-width: 16rem"
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') toggleExpand();
	}}
	on:click={toggleExpand}
>
	<!-- Product Image -->
	<div class="mb-4 h-48 w-full overflow-hidden rounded-lg">
		<img
			src={product.image}
			alt={product.title}
			class="h-full w-full object-cover"
			loading="lazy"
		/>
	</div>

	<!-- Title and Price -->
	<div class="flex w-full items-center justify-between">
		<h2 class="text-sm font-semibold">{product.title}</h2>
		<span class="font-bold text-sm text-green-600">{product.price}</span>
	</div>

	<!-- Expandable Content -->
	{#if expanded}
		<div
			transition:expand={{ duration: 300, easing: cubicOut }}
			class="mt-3 w-full overflow-visible text-sm text-gray-600"
		>
			<!-- Inner wrapper -->
			<div in:fade={{ duration: 200 }} class="space-y-3">
				<p class="w-90">{product.description}</p>

				<!-- Variant Selection -->
				<div class="flex relative overflow-visible flex-col gap-1">
					<VariantSelect
						label="Variant"
						options={product.variants}
						bind:selected={selectedVariant}
					/>
				</div>

				<!-- Quantity Control -->
				<div class="flex flex-col items-center justify-center gap-1">
					<QuantityCounter bind:value={quantity} min={1} max={99} />
				</div>

				<!-- Action Buttons -->
				<div class="flex flex-col gap-3 pt-2 sm:flex-row">
					<button
						class="flex w-full cursor-pointer items-center justify-between rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
						on:click|stopPropagation={addToCart}
					>
						Add to Cart
						<Icon width={25} icon="solar:cart-plus-bold" />
					</button>
					<button
						class="flex w-full cursor-pointer items-center justify-between rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
						on:click|stopPropagation={buyNow}
					>
						Buy Now
						<Icon width={25} icon="solar:shop-2-bold" />
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
</div>