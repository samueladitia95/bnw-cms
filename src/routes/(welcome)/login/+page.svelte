<script lang="ts">
	import Alert from "$lib/components/Alert.svelte";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import { applyAction, enhance } from "$app/forms";
	import { pb } from "$lib/pocketbase";
	import type { SubmitFunction } from "./$types";
	import { goto } from "$app/navigation";

	let isLoading: boolean = false;
	let popoutError: string = "";
	let errors: {
		[x: string]: string[] | undefined;
		[x: number]: string[] | undefined;
		[x: symbol]: string[] | undefined;
	} = {};

	const handleLogin: SubmitFunction = (input) => {
		// do something before the form submits
		isLoading = true;
		popoutError = "";
		errors = {};

		return async ({ result }) => {
			// do something after the form submits
			isLoading = false;
			const { type } = result;
			if (type === "success") {
				pb.authStore.loadFromCookie(await document.cookie);
				applyAction(result);
				goto("/");
			} else if (type === "failure") {
				errors = result.data?.errors || {};
			} else if (type === "error") {
				popoutError = result.error.message;
			}
		};
	};
</script>

<div class="container flex min-h-screen text-txt-primary">
	<div class="m-auto w-full max-w-sm">
		<p class="text-center text-3xl">
			<strong>B&W</strong>
			International
		</p>

		<p class="text-center py-6">Admin sign in</p>

		<form class="w-full flex flex-col" action="?/login" method="post" use:enhance={handleLogin}>
			<Input
				name="email"
				label="Email"
				type="email"
				required
				error={errors.email?.length ? errors.email[0] : ""}
			/>

			<Input
				name="password"
				label="Password"
				type="password"
				required
				error={errors.password?.length ? errors.password[0] : ""}
			/>

			<Button type="submit" disabled={isLoading} {isLoading}>Login</Button>
		</form>
	</div>
</div>

<Alert bind:content={popoutError} />
