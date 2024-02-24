import { localStorageStore } from '@skeletonlabs/skeleton';

export const settings = localStorageStore('settings', {
	tournamentLevel: 'Qual',
	matchNumber: 1,
	teamStation: 'Red1'
});
