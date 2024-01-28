<script lang="ts">
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import AppBar from '$lib/components/AppBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar />
	</svelte:fragment>

	<slot />
</AppShell>
