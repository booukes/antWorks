<script>
	import { Titlebar } from '$lib';
	import { fly } from 'svelte/transition';
</script>

<Titlebar />
<div
	in:fly={{ y: 20, duration: 500 }}
	class="mx-auto my-8 max-w-xl rounded-2xl border border-white/20 bg-black/40 p-8 text-center shadow-lg backdrop-blur-lg"
>
	<h1 class="mb-4 font-serif text-3xl font-bold text-gray-100">About Me</h1>
	<p class="font-serif text-lg text-gray-200">
		I’m a multi-platform developer building apps across desktop, mobile, and web. From WPF desktop
		tools to Kotlin mobile apps and SvelteKit websites, I turn ideas into polished, functional
		experiences with clean design and efficient code.
	</p>
</div>
