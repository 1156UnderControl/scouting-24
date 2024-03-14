<script lang="ts">
	import { page } from '$app/stores';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';

	import Stepper from '$lib/components/Stepper.svelte';
</script>

<SignedIn let:user>
	<section class="flex justify-center">
		<Stepper
			userName={user?.fullName || ''}
			userEmail={user?.emailAddresses[0].emailAddress || ''}
			eventAbbreviation={$page.params?.eventAbbreviation || ''}
		/>
	</section>
</SignedIn>
