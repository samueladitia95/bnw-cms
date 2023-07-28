<script lang="ts">
	export let isShow: boolean = false;
	export let content: string = "";
</script>

<div class="container absolute bottom-0 flex duration-100 {isShow ? 'translate-y-0' : 'translate-y-20'}">
	<div
		class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full max-w-sm mx-auto"
		role="alert"
	>
		{content}
	</div>
</div>
