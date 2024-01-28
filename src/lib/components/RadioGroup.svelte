<script lang="ts">
	type Option = {
		value: string;
		label: string;
	};

	export let options: Option[];
	export let legend: string;
	export let userSelected = options[0]?.value;

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
</script>

{#if legend}
	<p>{legend}</p>
{/if}

<RadioGroup>
	{#each options as { value, label }}
		<RadioItem bind:group={userSelected} name="justify" value={value}>{label}</RadioItem>
	{/each}
</RadioGroup>
