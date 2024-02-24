import { json } from '@sveltejs/kit';

import FrcApi from '$lib/models/FrcApi.js';

export async function GET({ params }) {
	const { eventYear, eventAbbreviation, tournamentLevel } = params;

	const schedule = await FrcApi.fetchSchedule(+eventYear, eventAbbreviation, tournamentLevel);

	return json(schedule);
}
