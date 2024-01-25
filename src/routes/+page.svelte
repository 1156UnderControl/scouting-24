<script lang="ts">
	import Stepper from "$lib/components/Stepper.svelte";
	let isUserAuthenticated = true;
</script>

{#if isUserAuthenticated}
	<Stepper />
{:else}
	<p>Authenticate first!</p>
{/if}

