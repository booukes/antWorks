<script>
	import { Titlebar } from '$lib';

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
<div class="mx-auto mt-12 max-w-xl rounded-lg bg-white p-8 shadow-lg">
	<h1 class="mb-6 text-3xl font-bold text-gray-800">Contact Me</h1>
	{#if submitted}
		<div class="mb-4 rounded bg-green-100 p-4 text-green-800">Thank you for your message!</div>
	{/if}
	<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
		<div>
			<label class="mb-2 block text-gray-700" for="name">Name</label>
			<input
				id="name"
				type="text"
				bind:value={name}
				class="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
				required
			/>
		</div>
		<div>
			<label class="mb-2 block text-gray-700" for="email">Email</label>
			<input
				id="email"
				type="email"
				bind:value={email}
				class="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
				required
			/>
		</div>
		<div>
			<label class="mb-2 block text-gray-700" for="message">Message</label>
			<textarea
				id="message"
				bind:value={message}
				class="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
				rows="5"
				required
			></textarea>
		</div>
		<button
			type="submit"
			class="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
		>
			Send Message
		</button>
	</form>
</div>
