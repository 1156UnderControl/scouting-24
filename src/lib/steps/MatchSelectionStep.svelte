<script lang="ts">
	export let tournamentLevel: string = 'Qualification';
	export let matchNumber: number = 1;
	export let teamStation: string = 'Blue1';

	import { Step } from '@skeletonlabs/skeleton';

	import MatchSelection from '$lib/components/MatchSelection.svelte';
	import TeamSelection from '$lib/components/TeamSelection.svelte';
</script>

<Step>
	<svelte:fragment slot="header">Match selection</svelte:fragment>
	<MatchSelection bind:tournamentLevel bind:matchNumber />
	<TeamSelection bind:teamStation />
</Step>
