<script lang="ts">
	import { Titlebar } from '$lib';

	interface Project {
		title: string;
		description: string;
		details: string;
		expanded: boolean;
	}

	let projects: Project[] = [
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
		}
	];

	function toggle(index: number) {
		// Collapse all projects first
		projects = projects.map((p, i) => ({ ...p, expanded: i === index ? !p.expanded : false }));
	}
</script>

<Titlebar />
<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
		{#each projects as project, i (project.title)}
			<div
				class="rounded-2xl border border-white/20 bg-black/40 p-6 shadow-lg backdrop-blur-lg transition-all duration-300"
			>
				<div class="flex cursor-pointer items-center justify-between" on:click={() => toggle(i)}>
					<h2 class="font-serif text-xl font-semibold text-gray-100">{project.title}</h2>
					<span class="ml-4 text-gray-300">{project.expanded ? '▲' : '▼'}</span>
				</div>
				<p class="mt-2 text-gray-300">{project.description}</p>
				{#if project.expanded}
					<div class="mt-4 border-t border-white/20 pt-4 text-gray-200">
						{project.details}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
