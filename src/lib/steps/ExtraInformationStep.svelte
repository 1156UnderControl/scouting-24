<script lang="ts">
	import {foulsStore} from '$lib/store.ts';
	
	export let playedAsDefense = false;
	export let driverSkills = 0;
	export let robotFailed = false;
	export let comments = "";
	export let droppedNotes = false;
	export let speedRatingSelected = "3";

	let speedOptions = [
		{value: "1", label: "1"},
		{value: "2", label: "2"},
		{value: "3", label: "3"},
		{value: "4", label: "4"},
		{value: "5", label: "5"}
	]

	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import NumberInput from '$lib/components/NumberInput.svelte';
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
	<div class="flex justify-items-center alignitems-center gap-3">
		<h3 class="h3 pb-2 pt-2">Fouls:</h3>
		<NumberInput bind:value={$foulsStore} min={0} max={5} />
	</div>
	<section class="justify-items-left grid gap-3 ">
		<Switch bind:checked={robotFailed} label="Robot failed?" />
		<Switch
			bind:checked={playedAsDefense}
			onChange={handlePlayedAsDefenseChange}
			label="Played as defense?"
		/>
		{#if playedAsDefense}
			<Rating bind:rating={driverSkills} label="Driver Skills" />
		{/if}
		<Switch bind:checked={droppedNotes} label="Dropped more than 2 notes?" />
		<RadioGroup legend="Speed Rating" options={speedOptions} userSelected={speedRatingSelected} />
		<TextInputField bind:text={comments} placeholder="Commments" />
	</section>
</Step>
