import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const domain = import.meta.env.VITE_WP_DOMAIN;
    const post = await fetch(`https://${domain}/wp-json/wp/v2/posts?tag=${params.id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return [];
        });

    if (post) {
        return {
            post
        };
    }

    throw error(404, 'Not found');
}