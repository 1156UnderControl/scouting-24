<script lang="ts">
	export let tournamentLevel: string = "Qualification"
	export let matchNumber: number = 1;
	export let teamStation: string = "Blue1";
	export let scouter: string = "";

	import { Step } from '@skeletonlabs/skeleton';

	import MatchSelection from "$lib/components/MatchSelection.svelte";
	import TeamSelection from "$lib/components/TeamSelection.svelte";
	import TextInputField from '$lib/components/TextInputField.svelte';
</script>

<Step>
	<svelte:fragment slot="header">
		Match selection
	</svelte:fragment>
	<MatchSelection bind:tournamentLevel bind:matchNumber />
	<TeamSelection bind:teamStation />
	<TextInputField bind:text={scouter} placeholder="Scouter initials"/> <!--ou usar dropdown?-->
</Step>