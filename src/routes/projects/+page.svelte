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
			details: 'Detailed information about project one. Technologies used, challenges, etc.',
			expanded: false
		},
		{
			title: 'Project Two',
			description: 'Short description of project two.',
			details: 'Detailed information about project two. Technologies used, challenges, etc.',
			expanded: false
		}
	];

	function toggle(index: number) {
		projects[index].expanded = !projects[index].expanded;
		// Reassign to trigger reactivity in Svelte
		projects = [...projects];
	}
</script>

<Titlebar />
<div class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-center text-3xl font-bold">Projects</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each projects as project, i (project.title)}
			<div class="rounded-lg bg-white p-6 shadow-md transition-all duration-300">
				<div class="flex cursor-pointer items-center justify-between" on:click={() => toggle(i)}>
					<h2 class="text-xl font-semibold">{project.title}</h2>
					<span class="ml-4 text-gray-500">
						{project.expanded ? '▲' : '▼'}
					</span>
				</div>
				<p class="mt-2 text-gray-700">{project.description}</p>
				{#if project.expanded}
					<div class="mt-4 border-t pt-4 text-gray-600">
						{project.details}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
