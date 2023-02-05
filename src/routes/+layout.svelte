<script>
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import "./styles.css";

	export let data;

	const categories = data.categories;
</script>

<div class="app">
	<Header {categories} />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		width: 90%;
		margin: 0 auto;
	}
</style>
