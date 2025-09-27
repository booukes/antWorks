<script lang="ts">
	let clicked = false;

	function handleClick() {
		clicked = true;
		setTimeout(() => (clicked = false), 80);
	}
</script>

<button
	type="button"
	on:click={handleClick}
	class="flex cursor-default flex-col items-end transition-transform duration-100"
	class:scale-110={clicked}
>
	<h1 class="mb-1 flex font-serif text-5xl">
		{#each 'antWorks'.split('') as letter, i}
			<span
				role="presentation"
				class="duration-50 inline-block transition-transform hover:scale-125 hover:text-green-600"
				style="transition-delay: 0ms; text-shadow: 0 0 0 rgba(255,255,255,0);"
				on:mouseenter={(e) => (e.currentTarget.style.textShadow = '0 0 12px rgba(13,13,13,0.6)')}
				on:mouseleave={(e) => (e.currentTarget.style.textShadow = '0 0 0 rgba(255,255,255,0)')}
			>
				{letter}
			</span>
		{/each}
	</h1>
</button>
