<script lang="ts">
	export let teleopAmpNotes = 0;
	export let teleopSpeakerNotes = 0;
	export let teleopAmplifiedSpeakerNotes = 0;
	
	import { Step } from '@skeletonlabs/skeleton';

	import NumberInput from "$lib/components/NumberInput.svelte"
	import Switch from "$lib/components/Switch.svelte";
</script>

<Step>
	<svelte:fragment slot="header">
		Teleoperated period
	</svelte:fragment>
	<Switch label="Coopertition button pressed" />
	<section>
		<h3 class="h3">Notes:</h3>
		<div class="grid grid-cols-2 justify-items-center gap-2 py-2">
			<div>
				<p class="pb-2">🎚️ Amp:</p>
				<NumberInput bind:value={teleopAmpNotes} min={0} max={7} />
			</div>
			<div>
				<p class="pb-2">🔊 Speaker:</p>
				<NumberInput bind:value={teleopSpeakerNotes} min={0} max={7} />
			</div>
		</div>
	</section>
</Step>