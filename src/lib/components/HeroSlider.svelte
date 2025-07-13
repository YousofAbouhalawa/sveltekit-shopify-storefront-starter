<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let slides: {
		image: string;
		title: string;
		description: string;
		link: string;
	}[] = [];

	let current = 0;
	let interval: any;
	let pauseTimeout: any;

	function startAutoSlide() {
		clearInterval(interval);
		interval = setInterval(() => {
			current = (current + 1) % slides.length;
		}, 3000);
	}

	function pauseAutoSlide() {
		clearInterval(interval);
		clearTimeout(pauseTimeout);
		pauseTimeout = setTimeout(() => {
			startAutoSlide();
		}, 5000);
	}

	function next() {
		current = (current + 1) % slides.length;
		pauseAutoSlide();
	}

	function prev() {
		current = (current - 1 + slides.length) % slides.length;
		pauseAutoSlide();
	}

	onMount(() => {
		startAutoSlide();
		return () => clearInterval(interval);
	});
</script>

<div class="relative h-[60vh] w-full overflow-hidden">
	<div
		class="flex h-full transition-transform duration-700 ease-in-out"
		style="transform: translateX(-{current * 100}%);"
	>
		{#each slides as slide}
			<div class="group relative h-full w-full flex-shrink-0">
				<!-- Background image with blur/darken on hover -->
				<div
					class="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-50"
					style="background-image: url('{slide.image}')"
				></div>

				<!-- Foreground content centered -->
				<div
					class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
				>
					<h2 class="mb-2 text-3xl font-bold md:text-4xl">{slide.title}</h2>
					<p class="mb-4 max-w-xl text-lg md:text-xl">{slide.description}</p>
					<a
						href={slide.link}
						target="_blank"
						class="rounded-md border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
					>
						Shop Now
					</a>
				</div>
			</div>
		{/each}
	</div>

	<!-- Controls -->
	<div
		class="pointer-events-none absolute top-1/2 left-0 z-20 flex w-full -translate-y-1/2 transform items-center justify-between px-4"
	>
		<button
			on:click={prev}
			class="pointer-events-auto rounded-full bg-white/50 px-2 py-2 text-2xl cursor-pointer text-black transition hover:bg-white"
		>
			<Icon icon="solar:alt-arrow-left-bold" width={30} />
		</button>
		<button
			on:click={next}
			class="pointer-events-auto rounded-full bg-white/50 px-2 py-2 text-2xl cursor-pointer text-black transition hover:bg-white"
		>
			<Icon icon="solar:alt-arrow-right-bold" width={30} />
		</button>
	</div>
</div>
