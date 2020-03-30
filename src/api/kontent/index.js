const KontentDelivery = require('@kentico/kontent-delivery');
let Page = require('@/models/page');
let Homepage = require('@/models/homepage');

const deliveryClient = new KontentDelivery.DeliveryClient({
    projectId: '2f957d12-d69d-00a1-bdf9-fb08ef04dfa5',
    typeResolvers: [
        new KontentDelivery.TypeResolver('page', (rawData) => new Page.Page()),
        new KontentDelivery.TypeResolver('homepage', (rawData) => new Homepage.Homepage())
    ]
});

export default {
/** Getting items from Kentico Kontent as Observable */
    async getHomePage() {
        return await deliveryClient.items()
        .type('homepage')
        .toPromise()
        .then(response => {
            //console.log('inside: ' + JSON.stringify(response));
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
    }
}