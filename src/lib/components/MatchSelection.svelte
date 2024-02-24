<script lang="ts">
	export let tournamentLevel: string = 'Qual';
	export let matchNumber: number = 1;
	export let onChange = () => {};

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	import NumberInput from '$lib/components/NumberInput.svelte';
</script>

<div class="inline-flex w-full justify-center gap-2">
	<RadioGroup>
		<RadioItem bind:group={tournamentLevel} name="justify" value={'Practice'} on:change={onChange}
			>Practice</RadioItem
		>
		<RadioItem bind:group={tournamentLevel} name="justify" value={'Qual'} on:change={onChange}
			>Quali</RadioItem
		>
		<RadioItem bind:group={tournamentLevel} name="justify" value={'Playoff'} on:change={onChange}
			>Play-off</RadioItem
		>
	</RadioGroup>
	<div class="dark:text-black">
		<NumberInput bind:value={matchNumber} min={1} max={150} />
	</div>
</div>
