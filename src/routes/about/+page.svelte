<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { Titlebar } from '$lib';

	// Twoje dane
	const skills = [
		'SvelteKit',
		'TailwindCSS',
		'WPF',
		'Kotlin',
		'Jetpack Compose',
		'TypeScript',
		'MySQL',
		'Firebase',
		'Firestore',
		'Microcontroller Development'
	];
	const hobbies = ['Photography', 'Astronomy', 'Airsoft', 'Coding', 'Technology', 'Cats'];
	const socials = [
		{
			name: 'GitHub',
			url: '#',
			icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			name: 'LinkedIn',
			url: '#',
			icon: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/boouke/',
			icon: `<svg fill="currentColor" viewBox="5 5 22 22"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>`
		}
	];

	let mainContainer: HTMLElement;
	let rotateX = 0;
	let rotateY = 0;

	// Funkcja do obsługi ruchu myszy dla efektu 3D - teraz globalnie
	function handleMouseMove(event: MouseEvent) {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		const maxRotate = 8; // Maksymalny kąt obrotu

		rotateY = ((event.clientX - centerX) / centerX) * maxRotate;
		rotateX = -((event.clientY - centerY) / centerY) * maxRotate;
	}

	// Resetowanie obrotu, gdy mysz opuści okno
	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
	}
</script>

<svelte:head>
	<title>Łukasz - Multi-platform Developer</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window on:mousemove={handleMouseMove} on:mouseout={handleMouseLeave} />

<Titlebar />

<div class="relative min-h-screen w-full overflow-hidden pt-4 font-sans">
	<main
		class="relative z-10 flex min-h-screen w-full items-start justify-center px-4 pb-16"
		style="perspective: 1000px;"
	>
		<div
			bind:this={mainContainer}
			style="transform: rotateX({rotateX}deg) rotateY({rotateY}deg);"
			in:fly={{ y: 100, duration: 400, delay: 0 }}
			class="w-full max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-8 text-center text-gray-100 shadow-2xl shadow-purple-500/10 backdrop-blur-xl transition-transform duration-300 ease-out md:p-12"
		>
			<section class="mb-12">
				<h1 class="mb-4 font-serif text-5xl font-bold text-white md:text-7xl">Hey, I’m Łukasz</h1>
				<p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
					I craft clean, performant apps — from low-level satellite tracking tools to smooth desktop
					and web experiences. Whether it’s a microcontroller project, a Kotlin Android app, or a
					Svelte web project, I focus on performance, clarity, and the most satysfying user
					experience possible.
				</p>
			</section>

			<section class="mb-16">
				<h2 class="mb-6 text-sm font-bold uppercase tracking-widest text-purple-400">
					Core Toolkit
				</h2>
				<div class="flex flex-wrap justify-center gap-3">
					{#each skills as skill, i}
						<div
							in:fade={{ duration: 500, delay: 300 + i * 100 }}
							class="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg"
						>
							{skill}
						</div>
					{/each}
				</div>
			</section>

			<section class="mb-12">
				<h2 class="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">After hours</h2>
				<p class="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
					When I’m not coding, you’ll find me behind the lens capturing moments, pondering about the
					deep space, strategizing in airsoft battles, or spending quality time with my cat.
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					{#each hobbies as hobby, i}
						<div
							in:fade={{ duration: 500, delay: 1000 + i * 100 }}
							class="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg"
						>
							{hobby}
						</div>
					{/each}
				</div>
			</section>

			<section>
				<div class="mt-8 border-t border-white/10 pt-8">
					<h2 class="mb-6 text-sm font-bold uppercase tracking-widest text-purple-400">
						Get in touch
					</h2>
					<div class="flex items-center justify-center gap-6">
						{#each socials as social}
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white"
								title={social.name}
							>
								<div class="h-8 w-8">
									{@html social.icon}
								</div>
							</a>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</main>
</div>

<style>
	/* Usunąłem stąd cały customowy CSS dla `.aurora-container` i animacji. Zostawiłem tylko fonty. */

	:global(body) {
		font-family: 'Inter', sans-serif;
		/* Możesz dodać tu jakieś tło, żeby efekt był widoczny */
		/* background: linear-gradient(to bottom right, #1a202c, #2d3748); */
	}

	.font-serif {
		font-family: 'Playfair Display', serif;
	}
</style>
