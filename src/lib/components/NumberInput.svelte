<script>
  export let value = 0;
  export let min = 0;
  export let max = Number.MAX_SAFE_INTEGER;
	
  function handleIncrease() {
    if(value < max) 
      value++;   
  }
	
  function handleDecrease() {
    if(value > min)
      value--;
  }
</script>

<section class="btn-group bg-surface-200-700-token border-token border-surface-400-500-token">
	<button on:click={handleDecrease} type="button">-</button>
	<input bind:value class="w-16 text-center" />
	<button on:click={handleIncrease} type="button">+</button>
</section>