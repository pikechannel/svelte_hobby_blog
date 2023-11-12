<script>
    export let categoryMap;
</script>

<div>
    <ul id="category_box">
        {#each categoryMap as category}
            {#if category.count !== 0}
                <li class="category_name">
                    <a href="/blog/pages/1?categories={category.id}">{category.name}</a>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    ul#category_box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 10px;
    }
    ul#category_box li.category_name {
        list-style: none;
        width: 30%;
        text-align: center;
        margin: 10px 0;
        padding: 10px 0;
        border: #61d800 solid 2px;
        transition: 0.5s;
    }

    ul#category_box li.category_name:hover {
        transition: 0.5s;
        background-color: #61d800;
    }

    ul#category_box li.category_name a {
        text-decoration: none;
        color: #61d800;
        transition: 0.5s;
    }

    ul#category_box li.category_name:hover a {
        color: #ffffff;
        transition: 0.5s;
    }
</style>
