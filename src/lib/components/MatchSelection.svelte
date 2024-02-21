<script lang="ts">
	export let tournamentLevel: string = 'Qualification';
	export let matchNumber: number = 1;

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	import NumberInput from '$lib/components/NumberInput.svelte';
</script>

<div class="inline-flex w-full justify-center gap-2">
	<RadioGroup>
		<RadioItem bind:group={tournamentLevel} name="justify" value={'Qualification'}>Quali</RadioItem>
		<RadioItem bind:group={tournamentLevel} name="justify" value={'Playoff'}>Play-off</RadioItem>
	</RadioGroup>
	<div class="dark:text-black">
		<NumberInput bind:value={matchNumber} min={1} max={150} />
	</div>
</div>
