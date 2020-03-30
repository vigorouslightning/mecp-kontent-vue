
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 
 */
export class HomePage extends ContentItem {
        constructor() {
        super({
            propertyResolver: ((elementName) => {
                if (elementName === 'about_title') {
                    return 'aboutTitle';
                }
                if (elementName === 'about_description') {
                    return 'aboutDescription';
                }
                if (elementName === 'about_image') {
                    return 'aboutImage';
                }
                if (elementName === 'hero_image') {
                    return 'heroImage';
                }
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'hero_buttons') {
                    return 'heroButtons';
                }
                return elementName;
            })
        });
    }
}