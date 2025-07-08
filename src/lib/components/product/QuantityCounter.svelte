<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';

  export let value: number = 1;
  export let min: number = 1;
  export let max: number = 99;

  const dispatch = createEventDispatcher();

  const increment = () => {
    if (value < max) {
      value += 1;
      dispatch('change', { value });
    }
  };

  const decrement = () => {
    if (value > min) {
      value -= 1;
      dispatch('change', { value });
    }
  };

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    // Allow only digits
    if (!/^\d*$/.test(inputValue)) {
      input.value = value.toString(); // revert if non-digit
      return;
    }

    const parsed = parseInt(inputValue);
    if (!isNaN(parsed)) {
      value = Math.min(Math.max(parsed, min), max);
      dispatch('change', { value });
    }
  };

  const handleBlur = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (!input.value || parseInt(input.value) < min) {
      value = min;
      input.value = min.toString();
      dispatch('change', { value });
    }
  };
</script>

<div class="flex items-center gap-2">

  <button
    class="text-gray-700 active:text-gray-900 active:scale-90 cursor-pointer transition"
    on:click|stopPropagation={decrement}
    aria-label="Decrease quantity"
    type="button"
  >
    <Icon icon="solar:minus-square-bold" width={30} />
  </button>

  <!-- Clean Numeric Input -->
  <input
    type="text"
    bind:value
    inputmode="numeric"
    pattern="[0-9]*"
    on:click={(event) => event.stopPropagation()}
    on:input={handleInput}
    on:blur={handleBlur}
    class="w-16 text-center rounded-md border px-2 py-1 text-sm"
  />

  <!-- Increase Button -->
  <button
    class="text-gray-700 active:text-gray-900 active:scale-90 cursor-pointer transition"
    on:click|stopPropagation={increment}
    aria-label="Increase quantity"
    type="button"
  >
    <Icon icon="solar:add-square-bold" width={30} />
  </button>
</div>
