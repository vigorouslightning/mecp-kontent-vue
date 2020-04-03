import {
    DeliveryClient,
    TypeResolver,
    ElementModels
} from '@kentico/kontent-delivery';

import {BrightCoveVideo} from '@/models/brightcove_video';
import {CallToAction} from '@/models/call_to_action';
import {EmbeddedFormStack} from '@/models/embedded_form_stack';
import {EmbeddedVideo} from '@/models/embedded_video';
import {ExternalLink} from '@/models/external_link';
import {Footer} from '@/models/footer';
import {Homepage} from '@/models/homepage';
import {HtmlBlock} from '@/models/html_block';
import {Image} from '@/models/image';
import {LayoutStudyGuide} from '@/models/layout___study_guide_list';
import {PageButton} from '@/models/page_button';
import {Page} from '@/models/page';
import {Promo} from '@/models/promo';
import {SimpleCopy} from '@/models/simple_copy';
import {StudyGuide} from '@/models/study_guide';
import {Testimonial} from '@/models/testimonial';




let typeResolvers = [
    new TypeResolver('call_to_action', () => new CallToAction()),
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