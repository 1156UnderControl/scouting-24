<script lang="ts">
	export let autoStartingPosition = 'amp';
	export let autoLeftZone = false;
	export let preloadNote = false;
	export let note1 = false;
	export let note2 = false;
	export let note3 = false;
	export let note4 = false;
	export let note5 = false;
	export let note6 = false;
	export let note7 = false;
	export let note8 = false;

	import { RadioGroup, RadioItem, Step } from '@skeletonlabs/skeleton';

	import Switch from '$lib/components/Switch.svelte';
</script>

<Step>
	<svelte:fragment slot="header">Autonomous period</svelte:fragment>
	<section>
		<p>Robot started closer to:</p>
		<div class="grid justify-items-center pb-2 gap-4">
			<RadioGroup>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'amp'}>🎚️ Amp</RadioItem>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'speaker'}
					>🔊 Speaker</RadioItem
				>
				<RadioItem bind:group={autoStartingPosition} name="justify" value={'source'}
					>🥇 Source</RadioItem
				>
			</RadioGroup>
			<Switch bind:checked={autoLeftZone} label="Robot left starting area completely" />
			<Switch bind:checked={preloadNote} label="Robot scored preload note" />
		</div>
		<h2 class="pt-2 font-bold">Scored notes:</h2>
		<div class="flex flex-row justify-center">
			<div class="flex flex-col">
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note1} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note2} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note3} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note4} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note5} /></div>
			</div>
			<div style="width: 20px;"></div>
			<div class="flex flex-col mt-5">
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note6} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note7} /></div>
					<div><input type="checkbox" class="w-10 h-10" bind:checked={note8} /></div>
			</div>
		</div>
	</section>
</Step>
