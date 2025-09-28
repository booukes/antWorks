<script lang="ts">
	import { onMount } from 'svelte';
	import { Titlebar } from '$lib';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Twoja customowa animacja - bez zmian, jest dobra
	function roll(node: HTMLElement, { duration = 400, easing = cubicOut }) {
		const style = getComputedStyle(node);
		const height = node.offsetHeight;
		const paddingTop = parseFloat(style.paddingTop);
		const paddingBottom = parseFloat(style.paddingBottom);
		const borderTopWidth = parseFloat(style.borderTopWidth);
		const borderBottomWidth = parseFloat(style.borderBottomWidth);

		node.style.overflow = 'hidden';

		return {
			duration,
			easing,
			css: (t: number) => `
                max-height: ${t * height}px;
                opacity: ${t};
                padding-top: ${t * paddingTop}px;
                padding-bottom: ${t * paddingBottom}px;
                border-top-width: ${t * borderTopWidth}px;
                border-bottom-width: ${t * borderBottomWidth}px;
            `
		};
	}

	interface Project {
		title: string;
		description: string;
		details: string;
		videoSrc: string;
		techStack: string[];
		githubUrl: string;
		expanded: boolean;
	}

	const initialProjects: Project[] = [
		{
			title: 'antGNSS',
			description:
				'A real-time satellite tracking and trajectory prediction application for Android.',
			details:
				'antGNSS is a specialized Android application designed for real-time tracking of Earth-orbiting satellites. It leverages the device’s built-in GNSS receiver to obtain precise location data and fetches ephemeris data for a wide range of satellites. The core of the application lies in its predictive engine, which uses orbital mechanics models to calculate and project future satellite trajectories. This complex astronomical data is then transformed into intuitive, interactive visualizations using Jetpack Compose, offering users a clear and engaging way to explore the celestial sphere. The project involved significant challenges in data parsing, state management for real-time updates, and performance optimization for smooth rendering on mobile devices.',
			videoSrc: '/videos/antgnss-demo.mp4',
			techStack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'GNSS API', 'Ktor', 'Coroutines'],
			githubUrl: 'https://github.com/shit',
			expanded: false
		},
		{
			title: 'antWriter',
			description: 'A minimalist, distraction-free text editor focused on productivity.',
			details:
				'antWriter is a lightweight, cross-platform text editor built on the principles of minimalist design and focused productivity. The primary goal was to create a writing environment that eliminates distractions and allows the user to concentrate solely on their content. Key features include a "Zen Mode" which provides a clean, full-screen interface, and a robust, non-intrusive autosave mechanism that ensures data integrity without interrupting the user\'s workflow. The application is designed to be resource-efficient, with a fast startup time and minimal memory footprint. The development process focused on creating a seamless user experience through subtle animations and a highly responsive interface, ensuring a smooth and effortless writing process.',
			videoSrc: '/videos/antwriter-demo.mp4',
			techStack: ['C#', 'WPF', '.NET', 'JSON', 'XAML'],
			githubUrl: 'https://github.com/booukes/antWriter',
			expanded: false
		},
		{
			title: 'antWorks Portfolio',
			description: 'A modern, responsive developer portfolio built with Svelte and Tailwind CSS.',
			details:
				"This portfolio is a single-page application (SPA) designed to serve as a dynamic and professional showcase of my software development projects. Built from the ground up with Svelte and TypeScript, it emphasizes performance, responsiveness, and a clean user interface. The component-based architecture of Svelte allows for modular and maintainable code. State management is handled reactively within the framework, providing a smooth and interactive user experience. All animations and page transitions are implemented using Svelte's built-in modules, ensuring they are lightweight and performant. The project is styled with Tailwind CSS, utilizing a utility-first approach for rapid and consistent UI development across all components and screen sizes.",
			videoSrc: '/videos/portfolio-demo.mp4',
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Vite', 'Svelte Transitions'],
			githubUrl: 'https://github.com/booukes/portfolio',
			expanded: false
		}
	];

	let projects: Project[] = [];

	onMount(() => {
		projects = initialProjects;
	});

	function toggle(index: number) {
		projects = projects.map((p, i) => ({ ...p, expanded: i === index ? !p.expanded : false }));
	}
</script>

<Titlebar />
<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
		{#each projects as project, i (project.title)}
			<div
				in:fly={{ y: 200, duration: 800, delay: i * 150, easing: cubicOut }}
				class="rounded-2xl border border-white/20 bg-black/20 p-6 shadow-lg backdrop-blur-lg transition-all duration-300"
			>
				<button
					type="button"
					class="flex w-full cursor-pointer items-center justify-between text-left"
					on:click={() => toggle(i)}
				>
					<div>
						<h2 class="font-serif text-xl font-semibold text-gray-100">{project.title}</h2>
						<p class="mt-2 text-gray-400">{project.description}</p>
					</div>
					<span
						class="ml-4 flex-shrink-0 text-gray-300 transition-transform duration-300"
						class:rotate-180={project.expanded}>▼</span
					>
				</button>

				{#if project.expanded}
					<div class="mt-4 border-t border-white/20 pt-4" transition:roll={{ duration: 600 }}>
						<div class="mb-4 overflow-hidden rounded-lg">
							<video
								class="h-full w-full object-cover"
								autoplay
								loop
								muted
								playsinline
								src={project.videoSrc}
							>
								Your browser does not support the video tag.
							</video>
						</div>

						<p class="text-base leading-relaxed text-gray-300">
							{project.details}
						</p>

						<div class="mt-6">
							<h4 class="mb-3 text-lg font-semibold text-gray-200">Technologies Used</h4>
							<div class="flex flex-wrap gap-2">
								{#each project.techStack as tech}
									<span
										class="rounded-full bg-sky-900/50 px-3 py-1 text-sm font-medium text-sky-300"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<div class="mt-6">
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-gray-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-github"
									><path
										d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
									/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
								>
								View on GitHub
							</a>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.rotate-180 {
		transform: rotate(0deg);
	}
</style>
