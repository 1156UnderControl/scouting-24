import { json } from '@sveltejs/kit';

import GoogleSheet from '$lib/models/GoogleSheet';

const GOOGLE_SHEET_ID = '1keZJh84RyPS4qYCuoDuOkOW9f966MeIEhinkI9PssSs';
const GOOGLE_SHEET_WORKSHEET_TITLE = 'BRBR';

export async function POST({ request }) {
	const {
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
	} = await request.json();

	const sheet = await GoogleSheet.create(GOOGLE_SHEET_ID, GOOGLE_SHEET_WORKSHEET_TITLE);
	sheet.addRow([
		userEmail,
		tournamentLevel,
		matchNumber,
		0, // TODO: TEAM NUMBER!
		autoStartingPosition,
		+autoLeftZone,
		autoAmpNotes,
		autoSpeakerNotes,
		+canPickupNotesFromGround,
		teleopAmpNotes,
		teleopSpeakerNotes,
		+robotParked,
		+attemptedClimbing,
		climbPosition,
		+failedClimbing,
		+trapNote,
		comments,
		fouls,
		+playedAsDefense,
		+robotFailed
	]);

	return json({});
}
