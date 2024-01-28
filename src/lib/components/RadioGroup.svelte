<script lang="ts">
	type Option = {
		value: string;
		label: string;
	};

	export let options: Option[];
	export let legend: string;
	export let userSelected = options[0]?.value;

	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
</script>

{#if legend}
	<p>{legend}</p>
{/if}

<ListBox>
	{#each options as { value, label }}
		<ListBoxItem bind:group={userSelected} name="medium" value>{label}</ListBoxItem>
	{/each}
</ListBox>
