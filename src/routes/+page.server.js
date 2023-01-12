import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const domain = import.meta.env.VITE_WP_DOMAIN;
    const [post, page] = await fetch(`https://${domain}/wp-json/wp/v2/posts/?per_page=10`)
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
            page
        };
    }

    throw error(404, 'Not found');
}