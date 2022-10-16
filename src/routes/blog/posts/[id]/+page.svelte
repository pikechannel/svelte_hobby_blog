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

    <div id="thumbnail_img_box">
        <img id="thumbnail_img" src="{thumbnailURL}" alt="">
    </div>
    
    <section>
        {@html contents}
    </section>
</main>

<style>
    #thumbnail_img_box {
        width: 100%;
        text-align: center;
    }
    #thumbnail_img {
        max-width: 80%;
        margin: 0 auto;
    }
</style>
