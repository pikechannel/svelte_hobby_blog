import { error } from '@sveltejs/kit';

export async function load() {
    const domain = import.meta.env.VITE_WP_DOMAIN;

    const categories = await fetch(`https://${domain}/wp-json/wp/v2/categories/?orderby=count`)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            return [];
        });

    if (categories) {
        return {categories};
    }

    throw error(404, 'Not found');
}