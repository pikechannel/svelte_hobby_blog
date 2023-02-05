<script>
    export let data = [];

    const title = data.post.title.rendered;
    const contents = data.post.content.rendered;
    const thumbnailURL = data.post.jetpack_featured_media_url;
</script>

<svelte:head>
    {@html data.post.yoast_head}
</svelte:head>

<div id="post_box">
    <div id="article">
        <h1>{title}</h1>

        <section>
            {@html contents}
        </section>
    </div>
    <aside>
        サイドメニュー
    </aside>
</div>

<style>
    div#post_box {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
    }

    div#post_box img {
        text-align: center;
    }
    div.wp-block-image figure {
        text-align: center;
    }

    div#article {
        width: 70%;
    }

    aside {
        width: 30%
    }
</style>
