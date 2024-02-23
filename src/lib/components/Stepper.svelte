<script lang="ts">
	export let userName: string;
	export let userEmail: string;

	import { Stepper } from '@skeletonlabs/skeleton';

	import AutonomousPeriodStep from '$lib/steps/AutonomousPeriodStep.svelte';
	import EndgameStep from '$lib/steps/EndgameStep.svelte';
	import ExtraInformationStep from '$lib/steps/ExtraInformationStep.svelte';
	import MatchSelectionStep from '$lib/steps/MatchSelectionStep.svelte';
	import TeleoperatedPeriodStep from '$lib/steps/TeleoperatedPeriodStep.svelte';

	// Match selection step
	let tournamentLevel = 'Quali';
	let matchNumber = 1;
	let teamStation = 'Blue1';

	// Autonomous period step
	let autoStartingPosition = 'amp';
	let autoLeftZone = false;
	let autoAmpNotes = 0;
	let autoSpeakerNotes = 0;

	// Teleoperated period step
	let teleopCoopertition = false;
	let canPickupNotesFromGround = false;
	let teleopAmpNotes = 0;
	let teleopSpeakerNotes = 0;
	let fouls = 0;

	// Endgame step
	let robotParked = false;
	let trapNote = false;
	let attemptedClimbing = false;
	let failedClimbing = false;
	let climbPosition = 'Center';

	// Extra information step
	let playedAsDefense = false;
	let driverSkills = 0;
	let robotFailed = false;
	let comments = '';
	let droppedNotes = false;
	let speedRatingSelected = '3';

	async function onCompleteHandler(e: Event): Promise<void> {
		await fetch('/api/submit', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				userName,
				userEmail,

				// Match selection step
				tournamentLevel,
				matchNumber,
				teamStation,

				// Autonomous period step
				autoStartingPosition,
				autoLeftZone,
				autoAmpNotes,
				autoSpeakerNotes,

				// Teleoperated period step
				teleopCoopertition,
				canPickupNotesFromGround,
				teleopAmpNotes,
				teleopSpeakerNotes,
				fouls,

				// Endgame step
				robotParked,
				trapNote,
				attemptedClimbing,
				failedClimbing,
				climbPosition,

				// Extra information step
				playedAsDefense,
				driverSkills,
				robotFailed,
				comments,
				droppedNotes,
				speedRatingSelected
			})
		});
	}
</script>

<div class="max-w-xl">
	<Stepper on:complete={onCompleteHandler} stepTerm="">
		<MatchSelectionStep bind:tournamentLevel bind:matchNumber bind:teamStation />
		<AutonomousPeriodStep
			bind:autoStartingPosition
			bind:autoLeftZone
			bind:autoAmpNotes
			bind:autoSpeakerNotes
		/>
		<TeleoperatedPeriodStep
			bind:teleopCoopertition
			bind:canPickupNotesFromGround
			bind:teleopAmpNotes
			bind:teleopSpeakerNotes
			bind:fouls
		/>
		<EndgameStep
			bind:robotParked
			bind:trapNote
			bind:attemptedClimbing
			bind:failedClimbing
			bind:climbPosition
		/>
		<ExtraInformationStep bind:playedAsDefense bind:driverSkills bind:robotFailed bind:fouls />
	</Stepper>
</div>
