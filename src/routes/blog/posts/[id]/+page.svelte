<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import TocList from "$lib/components/TocList.svelte";

    export let data = [];

    const title = data.post.title.rendered.replace("&#8230;", "...");
    const contents = data.post.content.rendered;
    const thumbnail = data.post.yoast_head_json.og_image[0].url;

</script>

<svelte:head>
    {@html data.post.yoast_head}
</svelte:head>


<div class="flexbox">
	<div id="main_area">
        <picture>
            <source srcset="{thumbnail}">
        </picture>
		<div id="post_box">
            <div id="article">
                <h1>{title}</h1>
                <section>
                    {@html contents}
                </section>
            </div>
        </div>
	</div>

	<!-- サイドバー -->
	<aside id="side_area">
		<Sidebar />
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
    .wp-block-image img {
        width: 100%;
    }
</style>
