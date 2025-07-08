<script>
  export let isOpen = false;
  export let items = [];

  const close = () => {
    isOpen = false;
  };

  const total = () =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
</script>

<!-- Backdrop -->
{#if isOpen}
  <div
    class="fixed inset-0 z-40 bg-black/50"
    on:click={close}
  />
{/if}

<!-- Modal -->
<div
  class={`fixed bottom-0 left-0 z-50 w-full transform rounded-t-2xl bg-white p-4 shadow-lg transition-transform duration-300
    ${isOpen ? 'translate-y-0' : 'translate-y-full'}
  `}
  style="max-height: 80vh;"
>
  <!-- Drag Handle -->
  <div class="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300" />

  <!-- Title -->
  <h2 class="mb-4 text-lg font-semibold text-gray-800">Your Cart</h2>

  <!-- Cart Items -->
  {#if items.length === 0}
    <p class="text-gray-500 text-sm">Your cart is empty.</p>
  {:else}
    <ul class="divide-y divide-gray-200 overflow-y-auto max-h-[50vh] mb-4">
      {#each items as item}
        <li class="py-2 flex justify-between">
          <div>
            <p class="font-medium">{item.title}</p>
            <p class="text-sm text-gray-500">x{item.quantity}</p>
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
        </li>
      {/each}
    </ul>

    <!-- Total and Actions -->
    <div class="mt-4 flex justify-between items-center">
      <span class="text-lg font-bold">Total:</span>
      <span class="text-lg font-bold">${total()}</span>
    </div>

    <button
      class="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      on:click={() => alert('Proceeding to checkout...')}
    >
      Checkout
    </button>
  {/if}
</div>
