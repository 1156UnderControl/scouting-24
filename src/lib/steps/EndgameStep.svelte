<script lang="ts">
	export let trapNote = false;
	export let robotParked = false;
	export let attemptedClimbing = false;
	export let failedClimbing = false;
	export let climbPosition = '';

	let climbOptions = [
		{ value: 'Left', label: 'Left' },
		{ value: 'Center', label: 'Center' },
		{ value: 'Right', label: 'Right' }
	];

	import { Step } from '@skeletonlabs/skeleton';

	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import Switch from '$lib/components/Switch.svelte';

	function handleAttemptedClimbingChange() {
		if (!attemptedClimbing) {
			failedClimbing = false;
			climbPosition = '';
		} else {
			climbPosition = 'Center';
		}
	}
</script>

<Step>
	<svelte:fragment slot="header">Endgame</svelte:fragment>
	<section class="justify-items-left grid gap-3">
		<div>
			<Switch bind:checked={robotParked} label="Robot has parked on stage area" />
		</div>
		<div>
			<Switch bind:checked={trapNote} label="Scored note in trap" />
		</div>
		{#if !robotParked}
			<div>
				<Switch
					bind:checked={attemptedClimbing}
					onChange={handleAttemptedClimbingChange}
					label="Robot has attempted to climb"
				/>
			</div>
			{#if attemptedClimbing}
				<div class="pb-2">
					<RadioGroup label="Climb Region" options={climbOptions} bind:selected={climbPosition} />
				</div>
				<div>
					<Switch bind:checked={failedClimbing} label="Robot has failed climbing" />
				</div>
			{/if}
		{/if}
	</section>
</Step>
