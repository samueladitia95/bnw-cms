<script lang="ts">
	import { pb } from "$lib/pocketbase";
	import { onMount } from "svelte";

	onMount(() => {
		console.log(pb.authStore.isValid, "isvalid");
	});
</script>

<h1 class="text-3xl font-bold underline">THIS IS EVENT PAGE</h1>
