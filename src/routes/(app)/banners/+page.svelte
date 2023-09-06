<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import Panel from "$lib/components/Panel.svelte";
	import { pb } from "$lib/pocketbase";
	import { onMount } from "svelte";

	const images = [
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400",
		"https://placehold.co/600x400"
	];

	let fileInput: HTMLInputElement;

	onMount(() => {
		const setup = async () => {
			const resultList = await pb.collection("banner_images").getList(1, 50);
		};
		setup();
	});
</script>

<Panel>
	<h1 class="text-2xl font-semibold mb-6">Banners</h1>
	<form>
		<Input name="banner-content" label="Banner Content" type="text" required />

		<div class="flex flex-wrap">
			{#each images as image, i}
				<div class="basis-1/4 h-40 p-2">
					<button
						type="button"
						on:click={() => fileInput.click()}
						class="border-2 border-dashed border-baseAlt2 rounded flex items-center justify-center w-full h-full relative cursor-pointer"
					>
						<div class="absolute top-2 left-3 text-lg font-medium">
							{i + 1}
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-10 h-10"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
					<input class="hidden" name="image" type="file" bind:this={fileInput} />
				</div>
			{/each}
		</div>

		<div class="flex justify-end">
			<button type="button" class="bg-red">Save</button>
		</div>
	</form>
</Panel>
