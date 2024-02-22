<script lang="ts">
	export let teleopCoopertition = false;
	export let canPickupNotesFromGround = false;
	export let teleopAmpNotes = 0;
	export let teleopSpeakerNotes = 0;
	export let fouls = 0;
	
	import { Step } from '@skeletonlabs/skeleton';

	import NumberInput from '$lib/components/NumberInput.svelte';
	import Switch from '$lib/components/Switch.svelte';
</script>

<Step>
	<svelte:fragment slot="header">Teleoperated period</svelte:fragment>
	<section>
		<div class="justify-items-left grid gap-3">
			<Switch bind:checked={teleopCoopertition} label="Coopertition button pressed" />
			<Switch bind:checked={canPickupNotesFromGround} label="Can pickup Notes from ground" />
		</div>
		<h3 class="h3 px-2">Scored notes:</h3>
		<div class="grid grid-cols-2 justify-items-center gap-2 py-2">
			<div>
				<p class="pb-2">🎚️ Amp:</p>
				<NumberInput bind:value={teleopAmpNotes} min={0} max={15} />
			</div>
			<div>
				<p class="pb-2">🔊 Speaker:</p>
				<NumberInput bind:value={teleopSpeakerNotes} min={0} max={15} />
			</div>
		</div>
		<h3 class="h3 px-2">Fouls:</h3>
		<NumberInput bind:value={fouls} min={0} max={15} />
	</section>
</Step>
