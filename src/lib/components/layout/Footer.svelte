<script>

  export const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<footer class="bg-gray-100 text-gray-700 border-t mt-12">
  <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
    <p class="text-sm text-center md:text-left">
      &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
    </p>

    <nav>
      <ul class="flex flex-wrap gap-6 justify-center md:justify-end text-sm">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
