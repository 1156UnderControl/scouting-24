<script lang="ts">
  export let userName: string;
  export let userEmail: string;

	import { Stepper } from '@skeletonlabs/skeleton';

	import AutonomousPeriodStep from "$lib/steps/AutonomousPeriodStep.svelte";
	import EndgameStep from '$lib/steps/EndgameStep.svelte';
	import ExtraInformationStep from "$lib/steps/ExtraInformationStep.svelte";
	import MatchSelectionStep from "$lib/steps/MatchSelectionStep.svelte";
	import TeleoperatedPeriodStep from "$lib/steps/TeleoperatedPeriodStep.svelte";

	// Match selection step
	let tournamentLevel = "Qualification";
	let matchNumber = 1;
	let teamStation = "Blue1";

	// Autonomous period step
	let autoLeftZone = false;
	let autoAmpNotes = 0;
	let autoSpeakerNotes = 0;

  // Teleoperated period step
	let teleopCoopertition = false;
	let teleopAmpNotes = 0;
	let teleopSpeakerNotes = 0;

  // Extra information step
	let playedAsDefense = false;
	let driverSkills = 0;
	let robotFailed = false;

	async function onCompleteHandler(e: Event): Promise<void> {

	}
</script>

<Stepper on:complete={onCompleteHandler} stepTerm="">
	<MatchSelectionStep bind:tournamentLevel bind:matchNumber bind:teamStation />
	<AutonomousPeriodStep bind:autoLeftZone bind:autoAmpNotes bind:autoSpeakerNotes />
	<TeleoperatedPeriodStep bind:teleopCoopertition bind:teleopAmpNotes bind:teleopSpeakerNotes />
	<EndgameStep/>
	<ExtraInformationStep bind:playedAsDefense bind:driverSkills bind:robotFailed />
</Stepper>
