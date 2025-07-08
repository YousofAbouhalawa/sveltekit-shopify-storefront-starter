<script>
	import HeroSlider from '$lib/components/HeroSlider.svelte';
import ProductCard from '$lib/components/product/ProductCard.svelte';
</script>

<HeroSlider />
<div class="flex w-full flex-wrap gap-4 p-4">
	<ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/>
	<ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/><ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/><ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/><ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/><ProductCard
		product={{
			title: `Sample Product ${0 + 1}`,
			price: `$${(0 + 1) * 10}.99`,
			description: 'This is a great product with amazing features and benefits.',
			image: '/img/product-placeholder.png',
			variants: ['S', 'M', 'L', 'XL']
		}}
	/>
</div>
