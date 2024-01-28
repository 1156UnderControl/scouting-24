<script lang="ts">
	export let robotParked = false;
	export let attemptedClimbing = false;
	export let failedClimbing = false;

	let climbOptions = [
		{value: "Left", label: "Left"},
		{value: "Midleft", label: "ML"},
		{value: "Mid", label: "Mid"},
		{value: "Midright", label: "MR"},
		{value: "Right", label: "Right"}
	]

	let userSelectedClimbStage = climbOptions[0]?.value;

	import { Step } from '@skeletonlabs/skeleton';
	import Switch from '$lib/components/Switch.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';

	function handleAttemptedClimbingChange() {
		if (!attemptedClimbing) {
			failedClimbing = false;
		}
	}

</script>

<Step>
	<svelte:fragment slot="header">Endgame</svelte:fragment>
	<section class="justify-items-left grid gap-3">
		<div>
			<Switch bind:checked={robotParked} label="Robot has parked on stage area" />
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
					<RadioGroup legend="Climb Region" options={climbOptions} userSelected={userSelectedClimbStage}/>
				</div>
				<div>
					<Switch bind:checked={failedClimbing} label="Robot has failed climbing" />
				</div>
			{/if}
		{/if}
		<!--TODO: adicionar end position (stage)-->
	</section>
</Step>
