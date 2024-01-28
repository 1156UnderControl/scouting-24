<script lang="ts">
	export let checked = false;
	export let label = '';
	export let onChange = () => {};
	export let disabled = false;

	import { SlideToggle } from '@skeletonlabs/skeleton';
</script>

<SlideToggle name="slide" bind:checked {disabled} on:change={onChange}>{label}</SlideToggle>
