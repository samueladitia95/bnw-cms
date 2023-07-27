<script lang="ts">
	export let name: string;
	export let value: string;
	export let placeholder: string;
	export let label: string;
	export let type: string = 'text';
</script>

<div class="p-2 bg-gray-200 rounded">
	<div class="text-sm">{label}</div>
	<input {type} {name} {value} {placeholder} class="bg-gray-200 w-full outline-none" />
</div>
