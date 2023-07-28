<script lang="ts">
	import { goto } from "$app/navigation";
	import { pb } from "$lib/pocketbase";
	import { onMount } from "svelte";

	onMount(() => {
		if (!pb.authStore.isValid) {
			goto("/login");
		}
	});
</script>

<slot />
