<script lang="ts">
	import { goto } from '$app/navigation';
	import Input from '$lib/components/Input.svelte';
	import { pb } from '$lib/pocketbase';
	import { afterUpdate } from 'svelte';

	let email: string;
	let password: string;

	const onSubmit = async () => {
		await pb.collection('users').authWithPassword(email, password);
		if (pb.authStore.isValid) {
			goto('/');
		}
	};

	afterUpdate(() => {
		console.log(email, 'EMAIL');
		console.log(password, 'PASSWORD');
	});
</script>

<div class="container flex min-h-screen">
	<div class="m-auto w-full max-w-md">
		<p class="text-center text-3xl">
			<strong>B&W</strong>
			International
		</p>

		<p class="text-center py-6">Admin sign in</p>

		<form class="w-full flex flex-col gap-8" on:submit|preventDefault={onSubmit}>
			<Input
				name="email"
				placeholder="email"
				bind:value={email}
				label="Email"
				type="email"
				required
			/>

			<Input
				name="passsword"
				placeholder="password"
				bind:value={password}
				label="Password"
				type="password"
				required
			/>
			<button type="submit">Login </button>
		</form>
	</div>
</div>
