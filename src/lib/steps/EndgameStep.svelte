<script lang="ts">
	export let trapNote = false;
	export let robotParked = false;
	export let attemptedClimbing = false;
	export let failedClimbing = false;
	export let userSelectedClimbStage = "Center";

	let climbOptions = [
		{value: "Left", label: "Left"},
		{value: "Center", label: "Center"},
		{value: "Right", label: "Right"}
	]

	import { Step } from '@skeletonlabs/skeleton';

	import Switch from '$lib/components/Switch.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';

	function handleAttemptedClimbingChange() {
		if (!attemptedClimbing) {
			failedClimbing = false;
			userSelectedClimbStage = "";
		} else {
			userSelectedClimbStage = "Center";
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
			<Switch bind:checked={trapNote} label="Note in trap"/>
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
