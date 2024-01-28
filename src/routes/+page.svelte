<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	import Stepper from "$lib/components/Stepper.svelte";
</script>

<section class="flex justify-center">
  <SignedIn let:user>
    <Stepper userName={user?.fullName || ""} userEmail={user?.emailAddresses[0].emailAddress || ""} />
  </SignedIn>
  <SignedOut>
    <p>Authenticate first!</p>
  </SignedOut>
</section>
