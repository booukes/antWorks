<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="flex w-full flex-row items-end justify-center">
	<a
		href="/about"
		class="m-4 transform font-serif text-2xl font-normal text-gray-300 transition-transform duration-100"
		class:scale-125={$page.url.pathname === '/about'}
		class:font-bold={$page.url.pathname === '/about'}
		class:hover:scale-125={$page.url.pathname !== '/about'}
	>
		about
	</a>
	<div class="m-4 h-6 border-l text-gray-500"></div>

	<a
		href="/projects"
		class="m-4 transform font-serif text-2xl font-normal text-gray-300 transition-transform duration-100"
		class:scale-125={$page.url.pathname === '/projects'}
		class:font-bold={$page.url.pathname === '/projects'}
		class:hover:scale-1250={$page.url.pathname !== '/projects'}
	>
		projects
	</a>
	<div class="m-4 h-6 border-l text-gray-500"></div>

	<a
		href="/contact"
		class="m-4 transform font-serif text-2xl font-normal text-gray-300 transition-transform duration-100"
		class:scale-125={$page.url.pathname === '/contact'}
		class:font-bold={$page.url.pathname === '/contact'}
		class:hover:scale-125={$page.url.pathname !== '/contact'}
	>
		contact
	</a>
</nav>
