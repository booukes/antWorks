<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="flex w-full flex-row items-end justify-center">
	<a
		href="/about"
		class="m-4 transform font-serif text-2xl font-normal transition-transform duration-100
			hover:scale-110 {$page.url.pathname === '/about' ? 'scale-115 font-bold text-green-600' : ''}"
	>
		about
	</a>
	<div class="m-4 h-6 border-l"></div>

	<a
		href="/projects"
		class="m-4 transform font-serif text-2xl font-normal transition-transform duration-100
			hover:scale-110 {$page.url.pathname === '/projects' ? 'scale-115 font-bold text-green-600' : ''}"
	>
		projects
	</a>
	<div class="m-4 h-6 border-l"></div>

	<a
		href="/contact"
		class="m-4 transform font-serif text-2xl font-normal transition-transform duration-100
			hover:scale-110 {$page.url.pathname === '/contact' ? 'scale-115 font-bold text-green-600' : ''}"
	>
		contact
	</a>
</nav>
