<script lang="ts">
	export let playedAsDefense = false;
	export let robotFailed = false;
	export let comments = '';
	export let droppedNotes = false;
	export let speedRating = 3;
	export let fouls = 0;

	export let hybrid = false;
	export let speaker = false;
	export let feeder = false;
	export let defender = false;

	let speedOptions = [
		{ value: 1, label: '1' },
		{ value: 2, label: '2' },
		{ value: 3, label: '3' },
		{ value: 4, label: '4' },
		{ value: 5, label: '5' }
	];

	import NumberInput from '$lib/components/NumberInput.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import { Step } from '@skeletonlabs/skeleton';
</script>

<Step>
	<svelte:fragment slot="header">Extra information</svelte:fragment>
	<div class="alignitems-center flex justify-items-center gap-3">
		<h3 class="h3 px-2">Fouls:</h3>
		<NumberInput bind:value={fouls} min={0} max={15} />
	</div>
	<section class="justify-items-left grid gap-3">
		<Switch bind:checked={robotFailed} label="Robot failed/broke" />
		<Switch bind:checked={playedAsDefense} label="Played as defense" />
		<Switch bind:checked={droppedNotes} label="Dropped more than 2 notes" />
		<RadioGroup label="Speed Rating" options={speedOptions} bind:selected={speedRating} />
		<div>
			<h3>Teste:</h3>
			<input type="checkbox" class="w-10 h-10" bind:checked={hybrid} />
		</div>
		<div>
			<input type="checkbox" class="w-10 h-10" bind:checked={speaker} />
		</div>
		<div>
			<input type="checkbox" class="w-10 h-10" bind:checked={feeder} />
		</div>
		<div>
			<input type="checkbox" class="w-10 h-10" bind:checked={defender} />
		</div>
		<textarea bind:value={comments} class="textarea" rows="5" placeholder="Additional comments" />
	</section>
</Step>

