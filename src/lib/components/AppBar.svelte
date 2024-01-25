<script>
	import {AppBar, LightSwitch} from '@skeletonlabs/skeleton';

	import logo from "$lib/assets/logo.png";
</script>

<div class="pb-2">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			<img width=42 height=42 alt="1156 logo" src={logo}/>
		</svelte:fragment>
		<p class="text-black dark:text-white">2024 CRESCENDO</p>
		<svelte:fragment slot="trail"><LightSwitch/></svelte:fragment>
	</AppBar>
</div>