<script lang="ts">
	export let userName: string;
	export let userEmail: string;
	export let eventAbbreviation: string;

	import { Stepper } from '@skeletonlabs/skeleton';
	import { get } from 'svelte/store';

	import type { ScheduleResponse } from '$lib/models/FrcApi';
	import { settings } from '$lib/models/LocalStorage';
	import AutonomousPeriodStep from '$lib/steps/AutonomousPeriodStep.svelte';
	import EndgameStep from '$lib/steps/EndgameStep.svelte';
	import ExtraInformationStep from '$lib/steps/ExtraInformationStep.svelte';
	import MatchSelectionStep from '$lib/steps/MatchSelectionStep.svelte';
	import TeleoperatedPeriodStep from '$lib/steps/TeleoperatedPeriodStep.svelte';

	// Match selection step
	let { tournamentLevel, matchNumber, teamStation } = get(settings);
	let teamNumber: number;
	let schedule: ScheduleResponse[];

	// Autonomous period step
	let autoStartingPosition = 'amp';
	let autoLeftZone = false;
	let preloadNote = false;
	let note1 = false;
	let note2 = false;
	let note3 = false;
	let note4 = false;
	let note5 = false;
	let note6 = false;
	let note7 = false;
	let note8 = false;

	// Teleoperated period step
	let teleopAmpNotes = 0;
	let teleopSpeakerNotes = 0;
	let passes = 0;
	let fouls = 0;

	// Endgame step
	let robotParked = false;
	let trapNote = false;
	let attemptedClimbing = false;
	let failedClimbing = false;
	let climbPosition = '';

	// Extra information step
	let playedAsDefense = false;
	let robotFailed = false;
	let comments = '';
	let droppedNotes = false;
	let speedRating = 3;

	function saveChoices() {
		if (matchNumber < schedule?.length) matchNumber += 1;

		settings.update((_) => {
			return {
				tournamentLevel,
				matchNumber,
				teamStation
			};
		});
	}

	function reloadPage() {
		location.reload();
	}

	async function onCompleteHandler(e: Event): Promise<void> {
		await fetch(`/scout/2024/${eventAbbreviation}`, {
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
				teamNumber,

				// Autonomous period step
				autoStartingPosition,
				autoLeftZone,
				preloadNote,
				note1,
				note2,
				note3,
				note4,
				note5,
				note6,
				note7,
				note8,

				// Teleoperated period step
				teleopAmpNotes,
				teleopSpeakerNotes,
				passes,
				fouls,

				// Endgame step
				robotParked,
				trapNote,
				attemptedClimbing,
				failedClimbing,
				climbPosition,

				// Extra information step
				playedAsDefense,
				robotFailed,
				comments,
				droppedNotes,
				speedRating
			})
		});

		saveChoices();
		reloadPage();
	}
</script>

<div class="max-w-xl">
	<Stepper on:complete={onCompleteHandler} stepTerm="">
		<MatchSelectionStep
			bind:tournamentLevel
			bind:matchNumber
			bind:teamStation
			bind:teamNumber
			bind:schedule
			bind:eventAbbreviation
		/>
		<AutonomousPeriodStep
			bind:autoStartingPosition
			bind:autoLeftZone
			bind:preloadNote
			bind:note1
			bind:note2
			bind:note3
			bind:note4
			bind:note5
			bind:note6
			bind:note7
			bind:note8
		/>
		<TeleoperatedPeriodStep
			bind:teleopAmpNotes
			bind:teleopSpeakerNotes
			bind:passes
			bind:fouls
		/>
		<EndgameStep
			bind:robotParked
			bind:trapNote
			bind:attemptedClimbing
			bind:failedClimbing
			bind:climbPosition
		/>
		<ExtraInformationStep
			bind:playedAsDefense
			bind:robotFailed
			bind:fouls
			bind:droppedNotes
			bind:comments
			bind:speedRating
		/>
	</Stepper>
</div>
