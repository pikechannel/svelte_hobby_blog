<script>
    import TocNode from "$lib/components/TocNode.svelte";
    export let tl;
</script>

<ul>
    {#if tl}
        {#each tl as toc}
            <li><a href="#{toc.id}">{toc.name}</a></li>
            {#if toc.childlen}
                <TocNode tl={toc} />
            {/if}
        {/each}
    {/if}
</ul>

<style lang="scss">
    a {
        color: black;
    }
</style>
