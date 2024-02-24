import { json } from '@sveltejs/kit';

import FrcApi from '$lib/models/FrcApi.js';

export async function POST({ request }) {
	const { tournamentLevel } = await request.json();

	const schedule = await FrcApi.fetchSchedule(tournamentLevel);

	return json(schedule);
}
