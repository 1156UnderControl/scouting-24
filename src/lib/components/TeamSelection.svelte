<script lang="ts">
	export let teamStation: string;

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
</script>

<RadioGroup>
	<RadioItem bind:group={teamStation} name="justify" value={"Blue1"}>Blue 1</RadioItem>
	<RadioItem bind:group={teamStation} name="justify" value={"Blue2"}>Blue 2</RadioItem>
	<RadioItem bind:group={teamStation} name="justify" value={"Blue3"}>Blue 3</RadioItem>
	<RadioItem bind:group={teamStation} name="justify" value={"Red1"}>Red 1</RadioItem>
	<RadioItem bind:group={teamStation} name="justify" value={"Red2"}>Red 2</RadioItem>
	<RadioItem bind:group={teamStation} name="justify" value={"Red3"}>Red 3</RadioItem>
</RadioGroup>