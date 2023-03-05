<script>
    import { onMount } from "svelte";

    const dataChid = import.meta.env.VITE_BLOGVILLAGE_DATA_CHID;
    const category = import.meta.env.VITE_BLOGVILLAGE_DATA_CATEGORY;
    onMount(() => {
        let blogVillageScript = document.createElement("script");
        blogVillageScript.setAttribute(
            "src",
            "https://blogparts.blogmura.com/js/parts_view.js"
        );
        document.head.appendChild(blogVillageScript);
    });
</script>

<div
    class="blogmura-blogparts"
    data-chid={dataChid}
    data-category={category}
    data-type="pv"
/>
