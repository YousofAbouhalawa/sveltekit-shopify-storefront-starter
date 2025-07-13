<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	export let collections: {
		handle: string;
		title: string;
	}[];


	let selectedCollection = '';

	const currentHandle = derived(page, ($page) => $page.params.collectionHandle || '');

	$currentHandle;

	$: selectedCollection = $currentHandle;
</script>

<div class="flex h-48 flex-col gap-6 p-6 md:flex-row">
	<div class="w-full space-y-4 rounded-lg border border-gray-300 bg-white p-6 shadow md:w-64">
		<div>
			<h3 class="text-md mb-2 font-semibold text-gray-700">Collections</h3>
			<div class="space-y-0">
				{#each collections as cat}
					<label class="flex items-center space-x-2 text-gray-600">
						<input
							type="radio"
							name="collection"
							value={cat.handle}
							bind:group={selectedCollection}
							on:change={() => goto(`/shop/${cat.handle}`)}
							checked={selectedCollection === cat.handle}
							class="form-radio text-blue-600"
						/>
						<span class="text-sm">{cat.title}</span>
					</label>
				{/each}
			</div>
		</div>
	</div>
</div>
