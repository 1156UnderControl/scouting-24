<script lang="ts">
	export let pickedUpFromGround = 0;
	export let pickedUpFromSource = 0;

	export let teleopAmpNotes = 0;
	export let teleopSpeakerNotes = 0;
	export let teleopTrapNotes = 0;
	export let teleopAmplifiedSpeakerNotes = 0;


	import NumberInput from "$lib/components/NumberInput.svelte"
	import { Step } from '@skeletonlabs/skeleton';
</script>

<Step>
	<svelte:fragment slot="header">
		Teleoperated period
	</svelte:fragment>
	<section>

		<h3 class="h3">Note picked up from:</h3>
		<div class="grid grid-cols-2 justify-items-center gap-2 py-2 pb-5">
			<div>
				<p class="pb-2">Ground:</p>
				<NumberInput bind:value={pickedUpFromGround} min={0} max={15} />
			</div>
			<div>
				<p class="pb-2">Source:</p>
				<NumberInput bind:value={pickedUpFromSource} min={0} max={15} />
			</div>
		</div>

		<h3 class="h3">Shooted notes:</h3>
		<div class="grid grid-cols-2 justify-items-center gap-2 py-2">
			<div>
				<p class="pb-2">🎚️ Amp:</p>
				<NumberInput bind:value={teleopAmpNotes} min={0} max={15} />
			</div>
			<div>
				<p class="pb-2">🔊 Speaker:</p>
				<NumberInput bind:value={teleopSpeakerNotes} min={0} max={15} />
			</div>
			<div>
				<p class="pb-2">🕸️ Trap:</p>
				<NumberInput bind:value={teleopTrapNotes} min={0} max={3} />
			</div>
			<div>
				<p class="pb-2">🔊≋ Amplified notes:</p>
				<NumberInput bind:value={teleopAmplifiedSpeakerNotes} min={0} max={10} />
			</div>
			
		</div>
	</section>
	

</Step>