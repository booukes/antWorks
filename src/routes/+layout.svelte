<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMobile = false;

	function checkMobile() {
		isMobile = window.innerWidth < 768;
	}

	onMount(() => {
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if isMobile}
	<div
		class="flex min-h-screen items-center justify-center bg-blue-500 text-2xl font-bold text-white"
	>
		MOBILE
	</div>
{:else}
	{@render children?.()}
{/if}
