<script lang="ts">
	export let checked = false;
	export let label = "";
  export let onChange = () => {};

	import { SlideToggle } from '@skeletonlabs/skeleton';
</script>

<SlideToggle name="slide" bind:checked on:change={onChange}>{label}</SlideToggle>
