<script>
	export let data;
	const posts = data.post;
	const title = import.meta.env.VITE_TITLE;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		{title}
	</h1>

	<ul>
		{#each posts as post}
			<!-- <a href="{post.link}">
			<li>{post.title.rendered}</li>
		  </a> -->
			<a href="/blog/posts/{post.id}">
				<li>{post.title.rendered}</li>
			</a>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
