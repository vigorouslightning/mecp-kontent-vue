import {
    DeliveryClient,
    TypeResolver,
    ElementModels
} from '@kentico/kontent-delivery';

import {Page} from '@/models/page';
import {Homepage} from '@/models/homepage';
import {Promo} from '@/models/promo';
import {Footer} from '@/models/footer';

let typeResolvers = [
    new TypeResolver('page', () => new Page()),
    new TypeResolver('homepage', () => new Homepage()),
    new TypeResolver('promo', () => new Promo()),
    new TypeResolver('footer', () => new Footer())
];

const deliveryClient = new DeliveryClient({
    projectId: process.env.VUE_APP_KONTENT_PROJECT_ID,
    typeResolvers: typeResolvers
});

export {
    deliveryClient
}