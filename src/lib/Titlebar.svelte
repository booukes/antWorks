<script lang="ts">
	import { Logo, NavElements, TitlebarText } from '$lib';
</script>

<section class="relative flex w-full flex-wrap items-center justify-between px-4 py-0">
	<div class="order-1">
		<Logo />
	</div>

	<div class="order-3 w-full md:absolute md:left-1/2 md:order-2 md:w-auto md:-translate-x-1/2">
		<NavElements />
	</div>

	<div class="order-2 md:order-3">
		<TitlebarText />
	</div>
</section>
