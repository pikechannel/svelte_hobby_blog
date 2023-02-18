<script>
	import { page } from "$app/stores";

	export let categories;

	let categoryMap = [];
	let categoryHaveParent = [];

	categories.forEach((c) => {
		if (c.parent === 0) {
			c["children"] = [];
			categoryMap.push(c);
		} else {
			categoryHaveParent.push(c);
		}
	});

	function compare(a, b) {
		var r = 0;
		if (a.id < b.id) {
			r = -1;
		} else if (a.id > b.id) {
			r = 1;
		}

		return r;
	}

	categoryHaveParent.sort(compare);

	categoryMap.forEach((cm) => {
		let childCategories = categoryHaveParent.filter((chp) => {
			if (cm.id == chp.parent) return true;
		});
		cm["children"] = childCategories;
	});

</script>

<header>
	<nav>
		<ul id="top_menu_list">
			<li class:active={$page.url.pathname === "/"} class="top_menu">
				<a data-sveltekit-reload href="/">HOME</a>
			</li>
			{#each categoryMap as category}
				<li
					class:active={$page.url.pathname ===
						"/blog/category/" + category.id}
					class="top_menu"
				>
					<a data-sveltekit-reload href="/blog/category/{category.id}"
						>{category.name}</a
					>
					{#if category.children.length > 0}
						<ul id="sub_menu_list">
							{#each category.children as children}
								<li
									class:active={$page.url.pathname ===
										"/blog/category/" + children.id}
									class="sub_menu"
								>
									<a
										data-sveltekit-reload
										href="/blog/category/{children.id}"
										>{children.name}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
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
		--background: rgba(255, 255, 255, 0.7);
		border-bottom: solid 1px;
	}

	@media screen and (max-width: 640px) {
		nav {
			overflow-x: auto;
		}
	}

	path {
		fill: var(--background);
	}

	ul#top_menu_list {
		display: flex;
		width: max-content;
		margin: 0 auto;
	}

	ul#top_menu_list li.top_menu {
		display: inline-block;
		height: 50px;
		padding: 0 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		position: relative;
	}

	ul#top_menu_list li.top_menu a {
		text-decoration: none;
		color: var(--color-text);
		font-family: "Solitreo", cursive;
	}

	ul#top_menu_list li.top_menu.active::before {
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

	ul#top_menu_list li.top_menu:hover #sub_menu_list {
		display: block !important;
	}

	ul#sub_menu_list {
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 9999;
		text-shadow: none;
		display: none;
		background-color: #323232;
		padding-left: 0;
		width: 200px;
	}
	ul#sub_menu_list li {
		list-style: none;
		overflow: visible;
		height: 54px;
		line-height: 54px;
		transition: 0.2s;
		color: white;
		border-top: 1px solid white;
	}

	ul#sub_menu_list li a {
		display: block;
		padding-left: 10px;
	}
	ul#sub_menu_list li a:hover {
		background: rgba(255, 255, 255, 0.15);
	}
</style>
