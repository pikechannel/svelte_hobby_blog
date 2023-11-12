<script>
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import "./styles.css";

	export let data;

	const categories = data.categories;
</script>

<Header {categories} />
<main>
	<slot />
</main>
<Footer />

<style>
</style>
