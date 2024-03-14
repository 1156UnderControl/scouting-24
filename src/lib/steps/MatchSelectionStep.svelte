<script lang="ts">
	export let eventAbbreviation: string;
	export let tournamentLevel: string = 'Qual';
	export let matchNumber: number = 1;
	export let teamStation: string = 'Red1';
	export let teamNumber: number;
	export let schedule: ScheduleResponse[];

	import { Step } from '@skeletonlabs/skeleton';

	import MatchSelection from '$lib/components/MatchSelection.svelte';
	import TeamSelection from '$lib/components/TeamSelection.svelte';
	import type { ScheduleResponse } from '$lib/models/FrcApi';

	let currentMatchTeams: number[] = [];

	$: currentMatchTeams =
		(schedule &&
			schedule[matchNumber - 1] && [
				schedule[matchNumber - 1].red1,
				schedule[matchNumber - 1].red2,
				schedule[matchNumber - 1].red3,
				schedule[matchNumber - 1].blue1,
				schedule[matchNumber - 1].blue2,
				schedule[matchNumber - 1].blue3
			]) ||
		[];

	async function handleTournamentLevelChange() {
		const response = await fetch(`/api/schedule/2024/${eventAbbreviation}/${tournamentLevel}`, {
			method: 'GET',
			headers: { 'content-type': 'application/json' }
		});

		schedule = await response.json();
	}

	handleTournamentLevelChange();
</script>

<Step>
	<svelte:fragment slot="header">Match selection</svelte:fragment>
	<MatchSelection bind:tournamentLevel bind:matchNumber onChange={handleTournamentLevelChange} />
	<TeamSelection bind:teamStation bind:teamNumber teams={currentMatchTeams} />
	{#if tournamentLevel === 'Practice'}
		<div class="">
			<label>
				Team number:
				<input bind:value={teamNumber} class="input ml-2 w-20" title="Team number" type="text" />
			</label>
		</div>
	{/if}
</Step>
