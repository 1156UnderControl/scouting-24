<script lang="ts">
	export let autoStartingPosition = 'amp';
	export let autoLeftZone = false;
	export let autoAmpNotes = 0;
	export let autoSpeakerNotes = 0;

	import { RadioGroup, RadioItem, Step } from '@skeletonlabs/skeleton';

	import NumberInput from '$lib/components/NumberInput.svelte';
	import Switch from '$lib/components/Switch.svelte';
</script>

<Step>
	<svelte:fragment slot="header">Autonomous period</svelte:fragment>
	<section>
		<p>Robot started closer to:</p>
		<div class="grid justify-items-center pb-4">
			<RadioGroup>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'amp'}>🎚️ Amp</RadioItem>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'speaker'}
					>🔊 Speaker</RadioItem
				>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'podium'}
					>🥇 Podium</RadioItem
				>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'source'}
					>⛲ Source</RadioItem
				>
			</RadioGroup>
		</div>
		<Switch bind:checked={autoLeftZone} label="Robot left starting area completely" />
		<h3 class="h3 pt-2">Notes:</h3>
		<div class="grid grid-cols-2 justify-items-center gap-2 py-2">
			<div>
				<p class="pb-2">🎚️ Amp:</p>
				<NumberInput bind:value={autoAmpNotes} min={0} max={7} />
			</div>
			<div>
				<p class="pb-2">🔊 Speaker:</p>
				<NumberInput bind:value={autoSpeakerNotes} min={0} max={7} />
			</div>
		</div>
	</section>
</Step>
