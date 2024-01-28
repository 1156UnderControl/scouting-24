<script lang="ts">
	export let playedAsDefense = false;
	export let driverSkills = 0;
	export let robotFailed = false;
	export let comments = '';

	import Rating from '$lib/components/Rating.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import TextInputField from '$lib/components/TextInputField.svelte';
	import { Step } from '@skeletonlabs/skeleton';

	const handlePlayedAsDefenseChange = () => {
		driverSkills = playedAsDefense ? 3 : 0;
	};
</script>

<Step>
	<svelte:fragment slot="header">Extra information</svelte:fragment>
	<section class="justify-items-left grid gap-3">
		<Switch bind:checked={robotFailed} label="Robot failed?" />
		<Switch
			bind:checked={playedAsDefense}
			onChange={handlePlayedAsDefenseChange}
			label="Played as defense?"
		/>
		{#if playedAsDefense}
			<Rating bind:rating={driverSkills} label="Driver Skills" />
		{/if}
		<TextInputField bind:text={comments} placeholder="Commments" />
	</section>
</Step>
