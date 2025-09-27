<script>
	import { Titlebar } from '$lib';
	import { fly, fade } from 'svelte/transition';

	const skills = [
		'SvelteKit',
		'TailwindCSS',
		'WPF',
		'Kotlin',
		'Jetpack Compose',
		'TypeScript',
		'Clean UI/UX'
	];
	const hobbies = ['Photography', 'Gaming', 'Airsoft', 'Coding', 'Cats'];
</script>

<Titlebar />

<section class="relative flex min-h-screen flex-row items-center justify-center text-gray-100">
	<div
		in:fly={{ y: 30, duration: 600 }}
		class="mr-8 w-full max-w-3xl rounded-3xl border border-white/20 p-12 text-center shadow-xl backdrop-blur-lg"
	>
		<h1 class="mb-6 font-serif text-5xl font-bold">Hey, I’m Łukasz</h1>
		<p class="mb-6 text-lg leading-relaxed md:text-xl">
			I’m a multi-platform developer turning ideas into polished, functional experiences. From WPF
			desktop tools to Kotlin mobile apps and SvelteKit websites, I focus on clean design, smooth
			interactions, and efficient code.
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			{#each skills as skill}
				<span
					in:fade={{ delay: 200 }}
					class="rounded-full bg-gray-700/50 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-gray-600/70 md:text-base"
				>
					{skill}
				</span>
			{/each}
		</div>
	</div>

	<div
		in:fly={{ y: 30, duration: 600 }}
		class="mr-8 w-full max-w-3xl rounded-3xl border border-white/20 p-12 text-center shadow-xl backdrop-blur-lg"
	>
		<h1 class="mb-6 font-serif text-5xl font-bold">After hours</h1>
		<p class="mb-6 text-lg leading-relaxed md:text-xl">
			When I’m not coding, you’ll find me behind the lens capturing moments, immersed in a video
			game, strategizing in airsoft battles, or spending quality time with my cat.
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			{#each hobbies as hobby}
				<span
					in:fade={{ delay: 200 }}
					class="rounded-full bg-gray-700/50 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-gray-600/70 md:text-base"
				>
					{hobby}
				</span>
			{/each}
		</div>
	</div>
</section>
