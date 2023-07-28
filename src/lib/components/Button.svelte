<script lang="ts">
	import Spinner from './Spinner.svelte';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let disabled: boolean = false;
	export let isLoading: boolean = false;
</script>

<button
	{type}
	{disabled}
	class="flex items-center justify-center bg-black text-white rounded py-4 border-solid-black font-semibold text-sm hover:opacity-80 duration-100 disabled:bg-btn-disabled disabled:hover:opacity-100 disabled:text-txt-disabled h-14"
>
	{#if isLoading}
		<Spinner />
	{:else}
		<slot />
	{/if}
</button>
