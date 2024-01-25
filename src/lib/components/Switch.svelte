<script>
	export let checked = false;
	export let label = "";

	import { SlideToggle } from '@skeletonlabs/skeleton';
</script>

<SlideToggle name="slide" bind:checked>{label}</SlideToggle>
