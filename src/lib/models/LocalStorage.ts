import { persisted } from 'svelte-persisted-store';

export const settings = persisted('settings', {
	tournamentLevel: 'Qual',
	matchNumber: 1,
	teamStation: 'Red1'
});
