<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import Alert from "$lib/components/Alert.svelte";
	import Button from "$lib/components/Button.svelte";
	import { _loginSchema } from "./+page";
	import type { PageData } from "./$types";
	import { pb } from "$lib/pocketbase";

	export let data: PageData;
	let errMsg: string = "";

	const { form, errors, constraints, enhance, delayed } = superForm(data.form, {
		SPA: true,
		validators: _loginSchema,
		async onUpdate({ form }) {
			try {
				if (form.valid) {
					await pb.admins.authWithPassword("test@example.com", "1234567890");
				}
			} catch {
				errMsg = "Wrong Email/Password";
			}
		}
	});
</script>

<div class="container flex min-h-screen text-txt-primary">
	<div class="m-auto w-full max-w-sm">
		<p class="text-center text-3xl">
			<strong>B&W</strong>
			International
		</p>

		<p class="text-center py-6">Admin sign in</p>

		<form class="w-full flex flex-col gap-6" method="post" use:enhance>
			<div class="flex flex-col gap-1">
				<div class="p-2 rounded bg-gray-100 focus-within:bg-gray-200 duration-200">
					<div
						class="text-sm font-semibold mb-1 {$errors.email ? 'text-red-600' : 'text-txt-hint'}"
					>
						Email*
					</div>
					<input
						class="text-sm bg-inherit w-full outline-none"
						autocomplete="off"
						bind:value={$form.email}
						{...$constraints.email}
					/>
				</div>
				{#if $errors.email}
					<p class="text-red-600 text-sm font-medium h-10">{$errors.email[0]}</p>
				{/if}
			</div>

			<div class="flex flex-col gap-1">
				<div class="p-2 rounded bg-gray-100 focus-within:bg-gray-200 duration-200">
					<div
						class="text-sm font-semibold mb-1 {$errors.password ? 'text-red-600' : 'text-txt-hint'}"
					>
						Password*
					</div>
					<input
						class="text-sm bg-inherit w-full outline-none"
						autocomplete="off"
						bind:value={$form.password}
						{...$constraints.password}
					/>
				</div>
				{#if $errors.password}
					<p class="text-red-600 text-sm font-medium h-10">{$errors.password[0]}</p>
				{/if}
			</div>

			<Button type="submit" disabled={$delayed} isLoading={$delayed}>Login</Button>
		</form>
	</div>
</div>

<Alert bind:content={errMsg} />
