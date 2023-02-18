<script>
    import { onMount } from "svelte";

    const id = import.meta.env.VITE_GOOGLE_SEARCH_ID;

    onMount(() => {
        let googleSearchScript = document.createElement("script");
        googleSearchScript.setAttribute(
            "src",
            `https://cse.google.com/cse.js?cx=${id}`
        );
        document.head.appendChild(googleSearchScript);
    });
</script>

<div class="gcse-search" />

<style></style>
