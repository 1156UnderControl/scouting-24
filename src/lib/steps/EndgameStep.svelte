<script lang="ts">
    export let park = false;
    export let failedClimb = false;
    export let climbed = false;
    
    import RadioGroup from '$lib/components/RadioGroup.svelte';
    import Switch from '$lib/components/Switch.svelte';
    import { Step } from '@skeletonlabs/skeleton';

</script>

<Step>
	<svelte:fragment slot="header">
		Endgame
	</svelte:fragment>
    <section class="grid justify-items-center gap-3">
        <div>
            <Switch bind:checked={park} label="Parked?" />
        </div>
        <div>
            <Switch bind:checked={climbed} label="Climbed?" /> <!--adicionar região do climb-->
        </div>
        <div>
            <Switch bind:checked={failedClimb} label="Failed climb?" />
        </div>
        <!--adicionar end position (stage)-->
    </section>
    
</Step>