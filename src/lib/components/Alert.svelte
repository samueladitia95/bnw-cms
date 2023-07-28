<script lang="ts">
	import { afterUpdate } from "svelte";

	export let isShow: boolean = false;
	export let content: string;
	export let duration: number = 2500;
	let autoClose: number; // To store autoclose settimeout

	afterUpdate(() => {
		clearTimeout(autoClose);
		if (isShow && content) {
			autoClose = setTimeout(() => {
				isShow = false;
				content = "";
			}, duration);
		}
	});
</script>

<div
	class="container absolute bottom-0 flex duration-100 {isShow
		? 'translate-y-0'
		: 'translate-y-20'}"
>
	<div
		class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full max-w-sm mx-auto"
		role="alert"
	>
		{content}
	</div>
</div>
