<script>
	export let pages;
	const pageList = [...Array(Number(pages))].map((_, i) => i + 1);
</script>

<section>
	<div id="pagination">
		{#each pageList as num, i}
			<span class="">{num}</span>
		{/each}
	</div>
	
</section>

<style>
	#pagination {
		text-align: center;
		display: flex;
  		justify-content: space-evenly;
	}
</style>
