<script lang="ts">
  import { fade, scale, slide } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import { tick } from 'svelte';

  export let options: string[] = [];
  export let selected: string = '';
  export let label: string = 'Select Variant';

  let open = false;
  let dropdownRef: HTMLDivElement;

  const toggle = async () => {
    open = !open;
    await tick();
    if (open && dropdownRef) dropdownRef.focus();
  };

  const selectOption = (option: string) => {
    selected = option;
    open = false;
  };


</script>

<div class="overflow-visible w-full">

  <label class="mb-1 block text-sm font-medium text-gray-700">{label}</label>
  <button
    on:click|stopPropagation={toggle}
    class="flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-sm shadow-sm transition hover:border-gray-400"
    type="button"
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    <span>{selected}</span>
    <Icon icon="solar:alt-arrow-down-bold" class={open? 'rotate-180 transition':'transition'} width="20" />
  </button>

  {#if open}
    <ul
      class="absolute z-10 mt-1 w-full rounded-md border bg-white py-1 shadow-lg"
      transition:slide={{ duration: 150 }}

      tabindex="0"
      bind:this={dropdownRef}
    >
      {#each options as option}
        <li
          class="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
          on:click|stopPropagation={() => selectOption(option)}
        >
          {option}
        </li>
      {/each}
    </ul>
  {/if}
</div>
