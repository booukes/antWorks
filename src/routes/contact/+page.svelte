<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { Titlebar } from '$lib';
	import { fly } from 'svelte/transition';
	export let form: ActionData;
	let submitting = false;

	const handleSubmit = () => {
		submitting = true;
		return async ({ update }: { update: () => void }) => {
			submitting = false;
			update();
		};
	};
</script>

<Titlebar />

<div
	in:fly={{ y: 20, duration: 500 }}
	class="mx-auto mt-12 max-w-xl rounded-2xl border border-white/20 p-8 shadow-lg backdrop-blur-lg"
>
	<h1 class="mb-6 font-serif text-3xl font-bold text-gray-100">Contact Me</h1>

	{#if form?.message}
		<div
			class:border-green-600={form?.success}
			class:bg-green-900={form?.success}
			class:text-green-200={form?.success}
			class:border-red-600={!form?.success}
			class:bg-red-900={!form?.success}
			class:text-red-200={!form?.success}
			class="mb-4 rounded border p-4"
			role="alert"
		>
			{form.message}
		</div>
	{/if}

	<form method="POST" action="?/sendMail" class="space-y-6" use:enhance={handleSubmit}>
		<div>
			<label class="mb-2 block font-serif text-gray-200" for="name">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
				placeholder="Your name"
				required
			/>
		</div>

		<div>
			<label class="mb-2 block font-serif text-gray-200" for="email">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
				placeholder="you@example.com"
				required
			/>
		</div>

		<div>
			<label class="mb-2 block font-serif text-gray-200" for="message">Message</label>
			<textarea
				id="message"
				name="message"
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
				rows="5"
				placeholder="Your message"
				required
			></textarea>
		</div>

		<button
			type="submit"
			class="flex w-full items-center justify-center gap-2 rounded-lg bg-[#290445] py-2 font-serif text-white transition hover:bg-[#3c0964] disabled:cursor-not-allowed disabled:opacity-50"
			disabled={submitting}
		>
			{#if submitting}
				<span class="h-4 w-4 animate-spin rounded-full border-t-2 border-white border-opacity-70"
				></span>
				Sending...
			{:else}
				Send Message
			{/if}
		</button>
	</form>
</div>
