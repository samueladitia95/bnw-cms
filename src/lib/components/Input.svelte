<script lang="ts">
	export let name: string;
	export let value: string;
	export let placeholder: string;
	export let label: string;
	export let type: string = 'text';
	export let required: boolean = false;
</script>

<div class="p-2 rounded bg-gray-100 focus-within:bg-gray-200 duration-200">
	<div class="text-sm font-semibold text-label mb-1">
		{label}
		{#if required}
			<span class="text-red-400">*</span>
		{/if}
	</div>
	<input
		{type}
		{name}
		{value}
		{placeholder}
		{required}
		class="text-sm bg-inherit w-full outline-none"
	/>
</div>
