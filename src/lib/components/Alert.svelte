<script lang="ts">
	import { afterUpdate } from "svelte";

	export let content: string;
	export let duration: number = 2500;
	let autoClose: number; // To store autoclose settimeout

	afterUpdate(() => {
		clearTimeout(autoClose);
		if (content) {
			autoClose = setTimeout(() => {
				content = "";
			}, duration);
		}
	});
</script>

<div
	class="w-full fixed bottom-0 flex items-center justify-center duration-100 {content
		? 'translate-y-0'
		: 'translate-y-20'}"
>
	<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full max-w-sm" role="alert">
		{content}
	</div>
</div>
