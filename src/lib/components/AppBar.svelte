<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';

	import logo from '$lib/assets/logo.png';
</script>

<div class="pb-2">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			<img width="42" height="42" alt="1156 logo" src={logo} />
		</svelte:fragment>
		<p class="text-black dark:text-white">2024 CRESCENDO</p>
		<svelte:fragment slot="trail">
			<div class="inline-flex gap-4">
				<LightSwitch />
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
				</SignedIn>
				<SignedOut>
					<SignInButton mode="modal" />
					<SignUpButton mode="modal" />
				</SignedOut>
			</div>
		</svelte:fragment>
	</AppBar>
</div>
