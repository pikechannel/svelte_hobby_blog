<script>
	import logo from "$lib/images/header_logo.png";
	import NewArticle from "$lib/components/NewArticle.svelte";
	import Twitter from "$lib/components/Twitter.svelte";

	export let data;
	const categoryMap = data.categories;
	function compare(a, b) {
		var r = 0;
		if (a.id < b.id) {
			r = -1;
		} else if (a.id > b.id) {
			r = 1;
		}

		return r;
	}

	categoryMap.sort(compare);
	const title = import.meta.env.VITE_TITLE;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="header_logo_box">
	<img src={logo} alt="" />
</div>

<section>
	<h1>新着記事</h1>
	<NewArticle {data} />

	<div>
		<ul id="category_box">
			{#each categoryMap as category}
				{#if category.count !== 0}
					<li class="category_name">
						<a href="/blog/category/{category.id}"
							>{category.name}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<Twitter />
</section>

<style>
	h1 {
		position: relative;
		padding: 0.25em 0;
		text-shadow: 0 1px 0 #ccc, 0 3px 0 #ccc, 0 4px 10px rgba(0, 0, 0, 0.2);
	}
	h1:after {
		content: "";
		display: block;
		height: 4px;
		background: -webkit-linear-gradient(to right, #2196f3, transparent);
		background: linear-gradient(to right, #2196f3, transparent);
	}
	.header_logo_box {
		text-align: center;
		padding: 50px 0;
	}
	.header_logo_box img {
		max-width: 100%;
	}
	ul#category_box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	ul#category_box li.category_name {
		list-style: none;
		width: 30%;
		text-align: center;
		margin: 10px 0;
		padding: 10px 0;
		border: #61d800 solid 2px;
		transition: 0.5s;
	}

	ul#category_box li.category_name:hover {
		transition: 0.5s;
		background-color: #61d800;
	}

	ul#category_box li.category_name a {
		text-decoration: none;
		color: #61d800;
		transition: 0.5s;
	}

	ul#category_box li.category_name:hover a {
		color: #ffffff;
		transition: 0.5s;
	}
</style>
