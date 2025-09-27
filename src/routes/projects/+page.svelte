<script lang="ts">
	// --- KROK 1: Importujemy onMount ---
	import { onMount } from 'svelte';
	import { Titlebar } from '$lib';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	function roll(node: HTMLElement, { duration = 2000, easing = cubicOut }) {
		const style = getComputedStyle(node);
		const height = node.offsetHeight;
		const paddingTop = parseFloat(style.paddingTop);
		const paddingBottom = parseFloat(style.paddingBottom);
		const borderTopWidth = parseFloat(style.borderTopWidth);
		const borderBottomWidth = parseFloat(style.borderBottomWidth);
		const marginTop = parseFloat(style.marginTop);
		const marginBottom = parseFloat(style.marginBottom);

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
                margin-top: ${t * marginTop}px;
                margin-bottom: ${t * marginBottom}px;
            `
		};
	}

	interface Project {
		title: string;
		description: string;
		details: string;
		expanded: boolean;
	}

	// --- KROK 2: Dane projektów w stałej ---
	const initialProjects: Project[] = [
		{
			title: 'Project One',
			description: 'Short description of project one.',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget libero sed nulla ullamcorper suscipit. Aliquam erat volutpat. Donec fringilla, nisi nec commodo fermentum, erat lorem consectetur nunc, vitae convallis urna lorem sed risus. Fusce sit amet arcu ac nunc posuere ultrices.',
			expanded: false
		},
		{
			title: 'Project Two',
			description: 'Short description of project two.',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget libero sed nulla ullamcorper suscipit. Aliquam erat volutpat. Donec fringilla, nisi nec commodo fermentum, erat lorem consectetur nunc, vitae convallis urna lorem sed risus. Fusce sit amet arcu ac nunc posuere ultrices.',
			expanded: false
		},
		{
			title: 'Project Three',
			description: 'Short description of project three.',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget libero sed nulla ullamcorper suscipit. Aliquam erat volutpat. Donec fringilla, nisi nec commodo fermentum, erat lorem consectetur nunc, vitae convallis urna lorem sed risus. Fusce sit amet arcu ac nunc posuere ultrices.',
			expanded: false
		},
		{
			title: 'Project Four',
			description: 'Short description of project four.',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget libero sed nulla ullamcorper suscipit. Aliquam erat volutpat. Donec fringilla, nisi nec commodo fermentum, erat lorem consectetur nunc, vitae convallis urna lorem sed risus. Fusce sit amet arcu ac nunc posuere ultrices.',
			expanded: false
		},
		{
			title: 'Project Five',
			description: 'Short description of project five.',
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget libero sed nulla ullamcorper suscipit. Aliquam erat volutpat. Donec fringilla, nisi nec commodo fermentum, erat lorem consectetur nunc, vitae convallis urna lorem sed risus. Fusce sit amet arcu ac nunc posuere ultrices.',
			expanded: false
		}
	];

	// --- KROK 3: Startujemy z pustą tablicą ---
	let projects: Project[] = [];

	// --- KROK 4: Wypełniamy ją w onMount ---
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
				in:fly={{ y: 200, duration: 600, delay: i * 150, easing: cubicOut }}
				class="rounded-2xl border border-white/20 bg-black/40 p-6 shadow-lg backdrop-blur-lg transition-all duration-300"
			>
				<button
					type="button"
					class="flex cursor-pointer items-center justify-between"
					on:click={() => toggle(i)}
				>
					<h2 class="font-serif text-xl font-semibold text-gray-100">{project.title}</h2>
					<span class="ml-4 text-gray-300">{project.expanded ? '▲' : '▼'}</span>
				</button>
				<p class="mt-2 text-gray-300">{project.description}</p>

				{#if project.expanded}
					<div class="mt-4 border-t border-white/20 pt-4" transition:roll={{ duration: 400 }}>
						<p class="text-gray-200">
							{project.details}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
