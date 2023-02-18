<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";
    import "swiper/css/autoplay";

    // Import Swiper styles
    import "swiper/css";

    export let data;
    const posts = data.post;
</script>

<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={10}
    slidesPerView={5}
    navigation
    autoplay
    loop
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    breakpoints={{
        1280: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 4,
        },
        640: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        },
    }}
>
    {#each posts as post}
        <SwiperSlide>
            <a href="/blog/posts/{post.id}" class="swiper_link">
                <img
                    src={post.jetpack_featured_media_url}
                    alt=""
                    height="200px"
                    class="swiper_img"
                />
                <p class="img_on_title">{post.title.rendered}</p>
            </a>
        </SwiperSlide>
    {/each}
</Swiper>
<div id="all_article_link_box">
    <a href="/blog/pages/1">全ての記事を見る</a>
</div>

<style>
    .header_logo_box {
        text-align: center;
        padding: 50px 0;
    }
    .header_logo_box img {
        max-width: 100%;
    }
    #all_article_link_box {
        text-align: right;
    }

    #all_article_link_box a {
        text-decoration: none;
        color: black;
    }

    #all_article_link_box a:hover {
        font-weight: bold;
    }

    .swiper-slide a {
        position: relative;
    }
    .swiper_link {
        position: relative;
        width: inherit;
    }
    .swiper_img {
        width: inherit;
        border-radius: 10px;
    }
    .img_on_title {
        color: black;
        font-size: 18px;
        text-shadow: 1px;
        position: absolute;
        bottom: 0;
        right: -4px;
        width: inherit;
        text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
            1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
            1px 0 0 #fff;
    }
</style>
