import {deliveryClient} from './client';

export default {
/** Getting items from Kentico Kontent as Observable */
    async getHomePage() {
        return await deliveryClient.items()
        .type('homepage')
        .toPromise()
        .then(response => {
            return response.items[0];
        });
    },

    async bySlug(slug) {
        return await deliveryClient.items()
        .type('page')
        .equalsFilter('elements.slug', slug)
        .toPromise()
        .then(response => {
            return response.items[0];
        });
    },

    async getFooterContent() {
        return await deliveryClient.items()
        .type('footer')
        .toPromise()
        .then(response => {
            return response.items[0];
        })
    },

    async getMainNav() {
        return await deliveryClient.items()
        .type('homepage')
        .depthParameter(3)
        .toPromise()
        .then(response => {
            return response.items[0].children.value;
        })
    }
}