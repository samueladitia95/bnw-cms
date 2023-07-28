<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
</script>

<button {type} class="bg-black text-white rounded py-3 border-solid-black">
	<slot />
</button>
