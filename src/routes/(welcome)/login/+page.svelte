<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<div class="container flex min-h-screen">
	<div class="m-auto w-full">
		<p class="text-center text-3xl">
			<strong>B&W</strong>
			International
		</p>

		<p class="text-center py-6">Admin sign in</p>

		<form class="w-full flex flex-col gap-8">
			<Input name="email" placeholder="email" value="john@mail.com" label="Email" type="email" />

			<Input
				name="passsword"
				placeholder="password"
				value="Password"
				label="Password"
				type="password"
			/>
			<button>Login </button>
		</form>
	</div>
</div>
