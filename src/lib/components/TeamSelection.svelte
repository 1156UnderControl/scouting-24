<script lang="ts">
	export let teamStation: string;
	export let teamNumber: number;
	export let teams: number[];

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	const STATION_TO_TEAM_MAPPING: Record<string, number> = {
		Red1: 0,
		Red2: 1,
		Red3: 2,
		Blue1: 3,
		Blue2: 4,
		Blue3: 5
	};

	$: teamNumber = teams[STATION_TO_TEAM_MAPPING[teamStation]];
</script>

<div class="inline-flex w-full justify-center">
	<RadioGroup>
		<RadioItem bind:group={teamStation} name="justify" value={'Red1'}
			><div>
				<p>Red 1</p>
				<p>{`${teams[0] ? ` (${teams[0]})` : ''}`}</p>
			</div></RadioItem
		>
		<RadioItem bind:group={teamStation} name="justify" value={'Red2'}>
			<p>Red 2</p>
			<p>{`${teams[1] ? ` (${teams[1]})` : ''}`}</p></RadioItem
		>
		<RadioItem bind:group={teamStation} name="justify" value={'Red3'}>
			<p>Red 3</p>
			<p>{`${teams[2] ? ` (${teams[2]})` : ''}`}</p></RadioItem
		>
		<RadioItem bind:group={teamStation} name="justify" value={'Blue1'}>
			<p>Blue 1</p>
			<p>{`${teams[3] ? ` (${teams[3]})` : ''}`}</p></RadioItem
		>
		<RadioItem bind:group={teamStation} name="justify" value={'Blue2'}>
			<p>Blue 2</p>
			<p>{`${teams[4] ? ` (${teams[4]})` : ''}`}</p></RadioItem
		>
		<RadioItem bind:group={teamStation} name="justify" value={'Blue3'}>
			<p>Blue 3</p>
			<p>{`${teams[5] ? ` (${teams[5]})` : ''}`}</p></RadioItem
		>
	</RadioGroup>
</div>
