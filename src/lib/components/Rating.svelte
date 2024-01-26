<script lang="ts">
	export let rating: number;
    export let label = "";

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
</script>

<div class="grid justify-items-center ">
    {label}
    <RadioGroup>
        <RadioItem bind:group={rating} name="justify" value={1}>1</RadioItem>
        <RadioItem bind:group={rating} name="justify" value={2}>2</RadioItem>
        <RadioItem bind:group={rating} name="justify" value={3}>3</RadioItem>
        <RadioItem bind:group={rating} name="justify" value={4}>4</RadioItem>
        <RadioItem bind:group={rating} name="justify" value={5}>5</RadioItem>
    </RadioGroup>
</div>
