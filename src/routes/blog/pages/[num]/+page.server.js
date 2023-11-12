import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
    const nowPagesNum = params.num;

    const categoryId = url.searchParams.has("categories") ? url.searchParams.get("categories") : "";
    const tagId = url.searchParams.has("tag") ? url.searchParams.get("tag") : "";
    const perPage = "6"

    const queries = url.search;

    const domain = import.meta.env.VITE_WP_DOMAIN;

    let apiUrl = `https://${domain}/wp-json/wp/v2/posts?per_page=${perPage}`

    if (!!nowPagesNum) {
        apiUrl = apiUrl.concat(`&page=${nowPagesNum}`)
    } else {
        apiUrl = apiUrl.concat(`&page=1`)
    }

    if (!!categoryId) {
        apiUrl = apiUrl.concat(`&categories=${categoryId}`)
    }

    if (!!tagId) {
        apiUrl = apiUrl.concat(`&tags=${tagId}`)
    }

    console.log(apiUrl)

    const [post, page] = await fetch(apiUrl)
        .then((response) => {
            return [response.json(), response.headers.get('x-wp-totalpages')];
        })
        .catch((error) => {
            console.log(error);
            return [];
        });


    if (post && page) {
        return {
            post,
            page,
            nowPagesNum,
            queries
        };
    }

    throw error(404, 'Not found');
}