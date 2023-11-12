<script>
    export let breadcrumbList;
</script>

<nav>
    <ol class="breadcrumb">
        {#each breadcrumbList as breadcrumb}
            {#if breadcrumb.path}
                <li><a data-sveltekit-reload href={breadcrumb.path}>{breadcrumb.name}</a></li>
            {/if}
            {#if !breadcrumb.path}
                <li>{breadcrumb.name}</li>
            {/if}
        {/each}
    </ol>
</nav>

<style>
    nav {
        padding: 20px;
    }
    .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    .breadcrumb li:not(:last-of-type)::after {
        content: ">";
        margin: 0 0.6em; /* 記号の左右の余白 */
        color: #777; /* 記号の色 */
    }

    .breadcrumb a {
        color: inherit;
        text-decoration: none;
    }
</style>
