<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(pb.authStore.isValid, 'IS VALID DI LOGIN PAGE');
		if (pb.authStore.isValid) {
			goto('/');
		}
	});
</script>

<slot />
