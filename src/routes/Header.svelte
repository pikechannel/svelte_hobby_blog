<script>
	import { page } from "$app/stores";

	export let data;
	console.log(data);

	let categories = [];
	const domain = import.meta.env.VITE_WP_DOMAIN;
	fetch(`https://${domain}/wp-json/wp/v2/categories/`)
		.then((response) => response.json())
		.then((data) => {
			categories = data;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === "/about"}>
				<a href="/">ホーム</a>
			</li>
			{#each categories as category}
				<li class:active={$page.url.pathname === "/about"}>
					<a data-sveltekit-reload href="/blog/category/{category.id}"
						>{category.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		/* display: flex;
		justify-content: center; */
		--background: rgba(255, 255, 255, 0.7);
		overflow-x: auto;
		border-bottom: solid 1px;
	}

	path {
		fill: var(--background);
	}

	ul {
		display: flex;
		width: max-content;
		margin: 0 auto;
	}

	li {
		display: inline-block;
		height: 50px;
		padding: 0 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

	li a {
		text-decoration: none;
		color: var(--color-text);
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
