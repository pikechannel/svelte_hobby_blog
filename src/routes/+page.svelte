<script>
	import Pagination  from '$lib/components/Pagination.svelte';
	import PostCard  from '$lib/components/PostCard.svelte';

	export let data;
	const posts = data.post;
	
	const pages = data.page;
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

	<div id="post_box">
		{#each posts as post}
			<PostCard title="{post.title.rendered}" imgUrl="{post.jetpack_featured_media_url}" description="{post.yoast_head_json.og_description.replace(/\s+/g,"").substr(0, 75) + "..."}" link="/blog/posts/{post.id}" />
		{/each}
	</div>
	<Pagination pages="{pages}"  />
	
</section>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}

	#post_box {
		display: flex;
		flex-flow: wrap;
		justify-content: space-around;
    	align-items: center;
	}

</style>
