<script lang="ts">
	export let teleopAmpNotes = 0;
	export let teleopSpeakerNotes = 0;
	export let teleopTrapNotes = 0;
	export let teleopAmplifiedSpeakerNotes = 0;
	
	import { Step } from '@skeletonlabs/skeleton';

	import NumberInput from "$lib/components/NumberInput.svelte"
	import Switch from "$lib/components/Switch.svelte";
</script>

<Step>
	<svelte:fragment slot="header">
		Teleoperated period
	</svelte:fragment>
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
			<div>
				<p class="pb-2">🕸️ Trap:</p>
				<NumberInput bind:value={teleopTrapNotes} min={0} max={3} />
			</div>
			<div>
				<p class="pb-2">🔊≋ Amplified notes:</p>
				<NumberInput bind:value={teleopAmplifiedSpeakerNotes} min={0} max={3} />
			</div>
		</div>
		<div class="grid justify-items-center pt-5 pb-6">
			<Switch label="Coopertition button pressed" /> <!--acho que faz sentido tirar-->
		</div>
	</section>
	

</Step>