<script lang="ts">
	export let name: string;
	export let value: string = "";
	export let placeholder: string = "";
	export let label: string;
	export let type: string = "text";
	export let required: boolean = false;
	export let error: string = "";
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
			bind:value
			{...{ type }}
			{name}
			{placeholder}
			{required}
			class="text-sm bg-inherit w-full outline-none"
			autocomplete="off"
		/>
	</div>
	<p class="text-red-600 text-sm font-medium h-10">{error}</p>
</div>
