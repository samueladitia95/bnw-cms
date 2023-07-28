<script lang="ts">
	import { goto } from "$app/navigation";
	import Alert from "$lib/components/Alert.svelte";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import { pb } from "$lib/pocketbase";
	import { ClientResponseError } from "pocketbase";

	let email: string;
	let password: string;
	let isLoading: boolean = false;
	let error: string = "";
	let isError: boolean = false;

	const onSubmit = async () => {
		try {
			isError = false;
			isLoading = true;
			error = "";

			await pb.collection("users").authWithPassword(email, password);
			if (pb.authStore.isValid) {
				goto("/");
			}
		} catch (err) {
			if (err instanceof ClientResponseError) {
				isError = true;
				error = err.message;
			} else {
				console.log(err);
			}
			setTimeout(() => {
				isError = false;
				error = "";
			}, 2500);
		} finally {
			isLoading = false;
		}
	};
</script>

<div class="container flex min-h-screen text-txt-primary">
	<div class="m-auto w-full max-w-sm">
		<p class="text-center text-3xl">
			<strong>B&W</strong>
			International
		</p>

		<p class="text-center py-6">Admin sign in</p>

		<form class="w-full flex flex-col gap-8" on:submit|preventDefault={onSubmit}>
			<Input name="email" bind:value={email} label="Email" type="email" required />

			<Input name="passsword" bind:value={password} label="Password" type="password" required />

			<Button type="submit" disabled={isLoading} {isLoading}>Login</Button>
		</form>
	</div>
</div>

<Alert content={error} isShow={isError} />
