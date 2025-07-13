<script lang="ts">
	import { expand } from '$lib/transitions/expand';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	import QuantityCounter from './QuantityCounter.svelte';
	import VariantSelect from './VariantSelect.svelte';

	export let product = {
		title: 'Sample Product',
		description: 'This is a great product with amazing features and benefits.',
		images: ['/img/product1.jpg', '/img/product2.jpg', '/img/product3.jpg'],
		variants: [
			{ id: 'variant1', title: 'Variant 1' },
			{ id: 'variant2', title: 'Variant 2' },
			{ id: 'variant3', title: 'Variant 3' }
		],
		price: {
			amount: 2999,
			currencyCode: 'USD',

		}
	};

	$: formattedPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: product.price.currencyCode
	}).format(product.price.amount);

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

	let currentImageIndex = 0;

	const showPrev = () => {
		currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
	};

	const showNext = () => {
		currentImageIndex = (currentImageIndex + 1) % product.images.length;
	};

	const goToImage = (index: number) => {
		currentImageIndex = index;
	};

	let showModal = false;

	const openModal = () => {
		showModal = true;
	};

	const closeModal = () => {
		showModal = false;
	};
</script>

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
		{#if !expanded}
			<div class="mb-4 h-48 w-full overflow-hidden rounded-lg">
				<img
					src={product.images[0]}
					alt={product.title}
					class="h-full w-full rounded-lg object-cover"
					loading="lazy"
				/>
			</div>
		{:else}
			<div class="relative mb-4 w-full">
				<div
					role="button"
					tabindex="0"
					class="relative h-48 w-full cursor-zoom-in overflow-hidden rounded-lg transition duration-300 ease-in-out"
					on:keydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') openModal();
					}}
					on:click|stopPropagation={openModal}
				>
					<img
						src={product.images[currentImageIndex]}
						alt={`Image ${currentImageIndex + 1}`}
						class="h-full w-full object-cover"
						loading="lazy"
					/>
				</div>

				<button
					on:click|stopPropagation={showPrev}
					class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-1 shadow hover:bg-white"
				>
					<Icon icon="ic:round-chevron-left" width="24" />
				</button>
				<button
					on:click|stopPropagation={showNext}
					class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-1 shadow hover:bg-white"
				>
					<Icon icon="ic:round-chevron-right" width="24" />
				</button>
				<div class="mt-2 flex justify-center gap-2">
					{#each product.images as img, i}
						<div
							role="button"
							tabindex="0"
							on:keydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') goToImage(i);
							}}
							on:click|stopPropagation={() => goToImage(i)}
						>
							<img
								src={img}
								alt={`Thumbnail ${i + 1}`}
								class="h-10 w-10 cursor-pointer rounded-md border object-cover transition-all duration-200
								{currentImageIndex === i ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-300'}"
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex w-full items-center gap-5 justify-between">
			<h2 class="text-sm font-semibold">{product.title}</h2>
			<span class="text-sm font-bold text-green-600">{formattedPrice}</span>
		</div>

		{#if expanded}
			<div
				transition:expand={{ duration: 300, easing: cubicOut }}
				class="mt-3 w-full overflow-visible text-sm text-gray-600"
			>
				<div in:fade={{ duration: 200 }} class="space-y-3">
					<p class="w-90">{product.description}</p>

					<div class="relative flex flex-col gap-1 overflow-visible">
						<VariantSelect
							label="Variant"
							options={product.variants}
							bind:selected={selectedVariant}
						/>
					</div>

					<div class="flex flex-col items-center justify-center gap-1">
						<QuantityCounter bind:value={quantity} min={1} max={99} />
					</div>

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

	{#if showModal}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
			on:click={closeModal}
			on:keydown={(e) => {
				if (e.key === 'Escape') closeModal();
			}}
			tabindex="0"
			role="dialog"
		>
			<div
				class="relative h-[70vh]  max-w-3xl rounded-lg "
				on:click|stopPropagation
				on:keydown={(e) => {
					if (e.key === 'Escape') closeModal();
				}}
				tabindex="0"
				role="button"
			>
				<img
					src={product.images[currentImageIndex]}
					alt="Fullscreen"
					class="h-full w-full rounded-lg object-contain"
				/>

				<button
					class="absolute top-2 right-2 rounded-full bg-white p-1 shadow hover:bg-gray-100"
					on:click={closeModal}
				>
					<Icon icon="ic:round-close" width="24" />
				</button>
			</div>
		</div>
	{/if}
</div>
