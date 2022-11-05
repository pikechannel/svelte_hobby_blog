<script>
    export let data = [];

    const title = data.post.title.rendered;
    const contents = data.post.content.rendered;
    const thumbnailURL = data.post.jetpack_featured_media_url;

   
</script>

<svelte:head>
	{@html data.post.yoast_head}
</svelte:head>

<main>
    <h1>{title}</h1>
    
    <section>
        {@html contents}
    </section>
</main>

<style>
</style>
