<script lang="ts">
	type Option = {
		value: string | number;
		label: string;
	};

	export let options: Option[];
	export let label: string;
	export let selected = options[0]?.value;

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
</script>

<div class="flex items-center gap-2">
	{#if label}
		<p>{label}</p>
	{/if}

	<RadioGroup>
		{#each options as { value, label }}
			<RadioItem bind:group={selected} name="justify" {value}>{label}</RadioItem>
		{/each}
	</RadioGroup>
</div>
