<script lang="ts">
  export let robotParked = false;
  export let attemptedClimbing = false;
  export let failedClimbing = false;

  import { Step } from '@skeletonlabs/skeleton';

  import Switch from '$lib/components/Switch.svelte';

  function handleRobotParkedChange() {
    if (robotParked) {
      attemptedClimbing = false;
      failedClimbing = false;
    }
  }

  function handleAttemptedClimbingChange() {
    if (attemptedClimbing) {
      robotParked = false;
    }
  }
</script>

<Step>
  <svelte:fragment slot="header">
    Endgame
  </svelte:fragment>
  <section class="grid justify-items-left gap-3">
    <div>
      <Switch bind:checked={robotParked} disabled={attemptedClimbing} onChange={handleRobotParkedChange} label="Robot has parked on stage area" />
    </div>
    {#if !robotParked}
      <div>
        <Switch bind:checked={attemptedClimbing} onChange={handleAttemptedClimbingChange} label="Robot has attempted to climb" />
        <!--TODO: adicionar região do climb-->
      </div>
      {#if attemptedClimbing}
        <div>
          <Switch bind:checked={failedClimbing} label="Robot has failed climbing" />
        </div>
      {/if}
    {/if}
    <!--TODO: adicionar end position (stage)-->
  </section>
</Step>
