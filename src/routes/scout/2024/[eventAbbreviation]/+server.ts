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
		preloadNote,
		note1,
		note2,
		note3,
		note4,
		note5,
		note6,
		note7,
		note8,
		totalNotes,

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
		teleopAmpNotes,
		teleopSpeakerNotes,
		passes,
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
		comments,
		+preloadNote,
		+note1,
		+note2,
		+note3,
		+note4,
		+note5,
		+note6,
		+note7,
		+note8,
		totalNotes,
	]);

	return json({});
}
