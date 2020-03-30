<template>
  <section>
    <h3 v-if="title">{{ title }}</h3>
    <div v-html="text"></div>

    <div class="row">
      <div class="col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4">
        <a :href="href" class="link-button" :target="target"
          >{{ buttonText }}<span>&gt;</span></a
        >
      </div>
    </div>
  </section>
</template>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import helpers from '@/helpers';

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => `<strong>${text}</strong>`
//   },
//   renderNode: {
//     [INLINES.EMBEDDED_ENTRY]: (node, next) => {
//       let obj = node.data.target.fields;
//       switch (node.data.target.sys.contentType.sys.id) {
//         case 'floatedImage':
//           return `<img alt="" max-width="100%" src="${obj.image.fields.file.url}" style="float: ${obj.floatDirection}; margin: 10px 15px;">`;
//       }
//     },
//     [INLINES.ENTRY_HYPERLINK]: (node, next) => {
//       return helpers.resolvers.inlines_entry_hyperlink(
//         node,
//         next(node.content)
//       );
//     },
//     [INLINES.ASSET_HYPERLINK]: (node, next) => {
//       return `<a href="${node.data.target.fields.file.url}">${next(
//         node.content
//       )}</a>`;
//     }
//   }
// };

export default {
  name: 'BlueButton',
  props: {
    widget: Object
  },
  computed: {
    title() {
      return this.widget.title.value;
    },
    text() {
      return this.widget.text.value;
    },
    href() {
      // Call to Actions can be internal pages, internal resources, or external pages.
      // Once we find a match we drop out. There is nothing stopping a content editor from putting in multiple links
      let cta = this.widget;
      return 'KyleActionTest.jpg';
      // if (cta.callToAction !== undefined) {
      //   return cta.callToAction[0].slug;
      // } else if (cta.internalAsset !== undefined) {
      //   return cta.internalAsset.file.url;
      // } else if (cta.externalUrl !== undefined) {
      //   return cta.ExternalUrl;
      // } else throw 'Not handled or no link present';
    },
    target() {
      return this.widget.openInNewWindow ? '_blank' : undefined;
    },
    buttonText() {
      let t = this.widget.buttonText;
      return t === undefined ? 'LEARN MORE' : t.toUpperCase();
    }
  }
};
</script>
