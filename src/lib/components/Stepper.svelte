<script lang="ts">	
	import { Stepper } from '@skeletonlabs/skeleton';

	import MatchSelectionStep from "$lib/steps/MatchSelectionStep.svelte";
	import AutonomousPeriodStep from "$lib/steps/AutonomousPeriodStep.svelte";
	import TeleoperatedPeriodStep from "$lib/steps/TeleoperatedPeriodStep.svelte";
	import EndgameStep from '$lib/steps/EndgameStep.svelte';
	import ExtraInformationStep from "$lib/steps/ExtraInformationStep.svelte";
	
	// Match selection step
	let tournamentLevel = "Qualification";
	let matchNumber = 1;
	let teamStation = "Blue1";
	
	// Autonomous period step
	let autoLeftZone = false;
	let autoAmpNotes = 0;
	let autoSpeakerNotes = 0;

	async function onCompleteHandler(e: Event): Promise<void> {
		
	}
</script>

<Stepper on:complete={onCompleteHandler} stepTerm="">
	<MatchSelectionStep bind:tournamentLevel bind:matchNumber bind:teamStation />
	<AutonomousPeriodStep bind:autoLeftZone bind:autoAmpNotes bind:autoSpeakerNotes />
	<TeleoperatedPeriodStep/>
	<EndgameStep/>
	<ExtraInformationStep/>
</Stepper>