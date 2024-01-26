<script lang="ts">
	export let rating: number = 5;
	export let playedAsDefense = false;
	export let robotFailed = false;

	import Rating from '$lib/components/Rating.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import { Step } from '@skeletonlabs/skeleton';
</script>

<Step>
	<svelte:fragment slot="header">
		Extra information
	</svelte:fragment>
	<section class="grid justify-items-center gap-5">
		<Rating bind:rating label="Driver Skills" />
		<Switch bind:checked={playedAsDefense} label="Played as defense?" />
		<!--se jogou defesa mostrar o componente de rating-->
		<Switch bind:checked={robotFailed} label="Robot failed?" />
	</section>
</Step>