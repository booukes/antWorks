<script>
	import { Titlebar } from '$lib';
	import { fly } from 'svelte/transition';

	let name = '';
	let email = '';
	let message = '';
	let submitted = false;

	function handleSubmit() {
		submitted = true;
		// Here you would handle sending the message
	}
</script>

<Titlebar />

<div
	in:fly={{ y: 20, duration: 500 }}
	class="mx-auto mt-12 max-w-xl rounded-2xl border border-white/20 bg-black/40 p-8 shadow-lg backdrop-blur-lg"
>
	<h1 class="mb-6 font-serif text-3xl font-bold text-gray-100">Contact Me</h1>

	{#if submitted}
		<div class="mb-4 rounded border border-green-600 bg-green-900/40 p-4 text-green-200">
			Thank you for your message!
		</div>
	{/if}

	<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
		<div>
			<label class="mb-2 block font-serif text-gray-200" for="name">Name</label>
			<input
				id="name"
				type="text"
				bind:value={name}
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
				placeholder="Your name"
				required
			/>
		</div>
		<div>
			<label class="mb-2 block font-serif text-gray-200" for="email">Email</label>
			<input
				id="email"
				type="email"
				bind:value={email}
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
				placeholder="you@example.com"
				required
			/>
		</div>
		<div>
			<label class="mb-2 block font-serif text-gray-200" for="message">Message</label>
			<textarea
				id="message"
				bind:value={message}
				class="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
				rows="5"
				placeholder="Your message"
				required
			></textarea>
		</div>
		<button
			type="submit"
			class="w-full rounded-lg bg-green-700 py-2 font-serif text-white transition hover:bg-blue-700"
		>
			Send Message
		</button>
	</form>
</div>
