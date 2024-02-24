import { json } from '@sveltejs/kit';

import GoogleSheet from '$lib/models/GoogleSheet';

const GOOGLE_SHEET_ID = '1keZJh84RyPS4qYCuoDuOkOW9f966MeIEhinkI9PssSs';

export async function POST({ request, params }) {
	const { eventAbbreviation } = params;
	const {
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
		robotFailed,
		comments,
		droppedNotes,
		speedRating
	} = await request.json();

	const sheet = await GoogleSheet.create(GOOGLE_SHEET_ID, eventAbbreviation);
	sheet.addRow([
		userName,
		userEmail,
		tournamentLevel,
		matchNumber,
		teamNumber,
		autoStartingPosition,
		+autoLeftZone,
		autoAmpNotes,
		autoSpeakerNotes,
		+teleopCoopertition,
		+canPickupNotesFromGround,
		teleopAmpNotes,
		teleopSpeakerNotes,
		+robotParked,
		+attemptedClimbing,
		climbPosition,
		+failedClimbing,
		+trapNote,
		+droppedNotes,
		fouls,
		+playedAsDefense,
		+robotFailed,
		+speedRating,
		comments
	]);

	return json({});
}
