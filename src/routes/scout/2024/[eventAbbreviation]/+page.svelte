<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';

	import Stepper from '$lib/components/Stepper.svelte';
</script>

<SignedIn let:user>
	<section class="flex justify-center">
		<Stepper
			userName={user?.fullName || ''}
			userEmail={user?.emailAddresses[0].emailAddress || ''}
		/>
	</section>
</SignedIn>
