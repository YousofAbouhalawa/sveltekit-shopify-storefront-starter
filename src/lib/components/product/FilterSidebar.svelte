<script>
  // Sample data and state
  let categories = ['Laptops', 'Phones', 'Accessories'];
  let selectedCategories = [];

  let brands = ['Apple', 'Samsung', 'Dell', 'Sony'];
  let selectedBrands = [];

  let minPrice = '';
  let maxPrice = '';

  let rating = '';

  let sortBy = 'relevance';

  // Events
  function toggleSelection(list, value) {
    const index = list.indexOf(value);
    if (index === -1) list.push(value);
    else list.splice(index, 1);
  }

  function applyFilters() {
    console.log({
      selectedCategories,
      selectedBrands,
      priceRange: [minPrice, maxPrice],
      rating,
      sortBy
    });

    // You'll replace this with real filtering logic
  }
</script>

<style>
  .shop-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }

  .sidebar {
    width: 250px;
    border-right: 1px solid #ccc;
    padding-right: 1rem;
  }

  .main {
    flex: 1;
  }

  .filter-group {
    margin-bottom: 1.5rem;
  }

  .filter-group h3 {
    margin-bottom: 0.5rem;
  }

  .sort-bar {
    margin-bottom: 1rem;
  }
</style>

<div class="shop-container">
  <!-- Sidebar -->
  <div class="sidebar">
    <div class="filter-group">
      <h3>Category</h3>
      {#each categories as cat}
        <label>
          <input
            type="checkbox"
            bind:group={selectedCategories}
            value={cat}
          />
          {cat}
        </label><br />
      {/each}
    </div>

    <div class="filter-group">
      <h3>Brand</h3>
      {#each brands as brand}
        <label>
          <input
            type="checkbox"
            bind:group={selectedBrands}
            value={brand}
          />
          {brand}
        </label><br />
      {/each}
    </div>

    <div class="filter-group">
      <h3>Price</h3>
      <input
        type="number"
        placeholder="Min"
        bind:value={minPrice}
        style="width: 100px"
      />
      –
      <input
        type="number"
        placeholder="Max"
        bind:value={maxPrice}
        style="width: 100px"
      />
    </div>

    <div class="filter-group">
      <h3>Rating</h3>
      <select bind:value={rating}>
        <option value="">Any</option>
        <option value="4">4★ & up</option>
        <option value="3">3★ & up</option>
        <option value="2">2★ & up</option>
        <option value="1">1★ & up</option>
      </select>
    </div>

    <button on:click={applyFilters}>Apply Filters</button>
  </div>

  <!-- Main content -->
  <div class="main">
    <div class="sort-bar">
      <label>
        Sort by:
        <select bind:value={sortBy}>
          <option value="relevance">Relevance</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </label>
    </div>

    <!-- Product grid or results go here -->
    <div>
      <p>Product grid goes here... (filter + sorting to be applied)</p>
    </div>
  </div>
</div>
