<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import TocList from "$lib/components/TocList.svelte";
    import BreadcrumbList from "$lib/components/BreadcrumbList.svelte";

    export let data = [];

    const title = data.post.title.rendered.replace("&#8230;", "...");
    const contents = data.post.content.rendered;
    const thumbnail = data.post.yoast_head_json.og_image[0].url;

    const breadcrumbList = [
        {
            name: "HOME",
            path: "/",
        },
        {
            name: "ブログ",
            path: "/blog/pages/1",
        },
        {
            name: title,
            path: "",
        },
    ];
</script>

<svelte:head>
    {@html data.post.yoast_head}
</svelte:head>

<BreadcrumbList {breadcrumbList} />
<div class="flexbox">
    <div id="post_box">
        <div id="article">
            <h1>{title}</h1>
            <picture>
                <source srcset={thumbnail} />
                <img src={thumbnail} alt="" />
            </picture>
            <section
                style="letter-spacing: 5px;line-height: 30px;margin-top:40px;"
            >
                {@html contents}
            </section>
        </div>
    </div>

    <!-- サイドバー -->
    <aside id="side_area">
        <Sidebar />
    </aside>
</div>

<style>
    div#post_box {
    }

    div#post_box img {
        text-align: center;
    }
    div.wp-block-image figure {
        text-align: center;
    }
    .wp-block-image img {
        width: 100%;
    }

    @media screen and (max-width: 640px) {
        #side_area {
            display: none;
        }
    }
</style>
