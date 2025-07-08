<script>
  import { onMount } from 'svelte';

  let current = 0;
  const slides = [
    { id: 1, color: '#FF6B6B' },
    { id: 2, color: '#4ECDC4' },
    { id: 3, color: '#1A535C' }
  ];

  let interval;
  let pauseTimeout;

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
    }, 5000); // Resume auto slide after 5 seconds
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

<style>
  .slider-container {
    overflow: hidden;
    width: 100%;
    height: 60vh;
    position: relative;
  }

  .slider-track {
    display: flex;
    transition: transform 0.8s ease-in-out;
    height: 100%;
  }

  .slide {
    min-width: 100%;
    height: 100%;
  }

  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none;
  }

  .button {
    background: rgba(255, 255, 255, 0.6);
    border: none;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
  }
</style>

<div class="slider-container">
  <div
    class="slider-track"
    style="transform: translateX(-{current * 100}%);"
  >
    {#each slides as slide}
      <div class="slide" style="background-color: {slide.color};"></div>
    {/each}
  </div>

  <div class="controls">
    <button class="button" on:click={prev}>&larr;</button>
    <button class="button" on:click={next}>&rarr;</button>
  </div>
</div>
