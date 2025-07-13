<script>
	import Logo from '../icons/Logo.svelte';
	import Icon from '@iconify/svelte';

	export const navItems = [
		{ name: 'Shop', href: '/shop' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Contact Us', href: '/contact' },
		{ type: 'cart' }
	];
</script>

<header class="sticky top-4 z-50 flex justify-center antialiased">
	<nav
		class="flex w-full max-w-[640px] justify-center gap-4 rounded-full bg-gradient-to-b from-white to-white/30 px-6 py-2 shadow-md backdrop-blur-md dark:from-black/10 dark:to-black/20"
	>
		<a href="/">
			<Logo width={40} height={35} />
		</a>
		<ul class="flex items-center justify-center gap-2">
			{#each navItems as item}
				{#if item.type === 'cart'}
					<li>
						<a
							href="/cart"
							class="flex items-center gap-1 rounded-full px-4 py-1 text-sm font-medium text-gray-700 transition hover:text-black hover:text-white"
						>
							<Icon icon="solar:cart-large-2-bold" width="20" />
							Cart
						</a>
					</li>
				{:else}
					<li>
						<a
							href={item.href}
							class="rounded-full px-5 py-1 text-sm font-medium transition-colors duration-150"
							class:bg-gray-900={item.name === 'Shop'}
							class:text-white={item.name === 'Shop'}
							class:hover:bg-gray-700={item.name !== 'Shop'}
							class:hover:text-white={item.name !== 'Shop'}
							class:text-gray-700={item.name !== 'Shop'}
						>
							{item.name}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</header>
