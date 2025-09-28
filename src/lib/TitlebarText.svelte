<script lang="ts">
	let clicked = false;
	function handleClick() {
		clicked = true;
		setTimeout(() => (clicked = false), 80);
	}

	let isHovering = false;
</script>

<button
	type="button"
	on:click={handleClick}
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	class="flex cursor-default items-center justify-center transition-transform duration-100"
	class:scale-110={clicked}
>
	<div class="flex items-baseline">
		<h1 class="mb-1 flex font-serif text-5xl transition-all duration-500 ease-in-out">
			{#each 'antWorks'.split('') as letter}
				<span
					role="presentation"
					class="duration-50 inline-block text-white transition-transform hover:scale-125 hover:[color:#AD10EB]"
					on:mouseenter={(e) => (e.currentTarget.style.textShadow = '0 0 12px rgba(13,13,13,0.6)')}
					on:mouseleave={(e) => (e.currentTarget.style.textShadow = '0 0 0 rgba(255,255,255,0)')}
				>
					{letter}
				</span>
			{/each}
		</h1>

		<div
			class="overflow-hidden transition-all duration-500 ease-in-out"
			style:max-width={isHovering ? '150px' : '0px'}
		>
			<p
				class="font-Inter ml-3 flex whitespace-nowrap text-xl transition-opacity duration-500 ease-in-out"
				class:opacity-100={isHovering}
				class:opacity-0={!isHovering}
			>
				{#each 'by antDev'.split('') as letter}
					<span
						role="presentation"
						class="inline-block text-white transition-transform duration-150 hover:scale-125 hover:[color:#AD10EB]"
						on:mouseenter={(e) =>
							(e.currentTarget.style.textShadow = '0 0 12px rgba(13,13,13,0.6)')}
						on:mouseleave={(e) => (e.currentTarget.style.textShadow = '0 0 0 rgba(255,255,255,0)')}
					>
						{@html letter === ' ' ? '&nbsp;' : letter}
					</span>
				{/each}
			</p>
		</div>
	</div>
</button>
