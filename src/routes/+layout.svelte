<script lang="ts">
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	import AppBar from '$lib/components/AppBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar />
	</svelte:fragment>

	<section class="flex justify-center">
		<SignedIn>
			<slot />
		</SignedIn>
		<SignedOut>
			<p>Authenticate first!</p>
		</SignedOut>
	</section>
</AppShell>
