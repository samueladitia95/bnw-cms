<script lang="ts">
	export let name: string;
	export let label: string;
	export let required: boolean = false;
	export let error: string = "";
	export let multiple: boolean = false;

	let fileInput: HTMLInputElement;
</script>

<div class="flex flex-col gap-1">
	<div class="p-2 rounded bg-gray-100 focus-within:bg-gray-200 duration-200">
		<div class="text-sm font-semibold text-txt-hint mb-1 {error ? 'text-red-600' : ''}">
			{label}
			{#if required}
				<span class="text-red-600">*</span>
			{/if}
		</div>
		<!-- type must be formatted this way for two way binding input with dynamic type -->
		<input
			type="file"
			{name}
			{required}
			{multiple}
			class="hidden"
			autocomplete="off"
			bind:this={fileInput}
		/>
		<div class="mt-4">
			<button
				on:click={() => fileInput.click()}
				class="font-medium p-1 border-t-2 border-baseAlt w-full"
			>
				Upload New Image
			</button>
		</div>
	</div>
	<p class="text-red-600 text-sm font-medium h-10">{error}</p>
</div>
