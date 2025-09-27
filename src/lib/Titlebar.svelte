<script>
	import { Logo, NavElements, TitlebarText } from '$lib';
</script>

<section class="relative flex w-full items-center px-4 py-0 shadow-xl">
	<div class="flex items-center">
		<Logo />
	</div>
	<div class="absolute left-1/2 -translate-x-1/2 transform">
		<NavElements />
	</div>
	<div class="ml-auto flex items-center">
		<TitlebarText />
	</div>
</section>
