<template>
  <section
    class="padding-top-sm padding-bottom-sm"
    :style="{'background-image' : 'url(' + image + ')'}"
    style="background-size: cover;"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-3 col-lg-9">
          <h2>
            <p>{{ widget.title.value }}</p>
          </h2>
        </div>
      </div>
      <div class="row padding-vertical-lg">
        <div class="col-lg-offset-3 col-lg-9" v-html="widget.description.value"></div>
      </div>
      <!-- <div v-if="widget.showLearnMoreLink" class="row">
        <div class="col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4">
          <router-link
            :to="{
              name: 'page',
              params: {
                slug: promo.relatedContent.slug,
                id: promo.relatedContent.entryId
              }
            }"
            class="link-button"
          >
            Learn More
            <span>&gt;</span>
          </router-link>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import helpers from '@/helpers';

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => `<strong>${text}</strong>`
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, next) => {
//       if (
//         node.content.length === 1 &&
//         node.content[0].nodeType === 'text' &&
//         node.content[0].value.match(/^ *$/) !== null
//       )
//         return '';
//       else {
//         return `<p>${next(node.content)}</p>`;
//       }
//     },
//     [INLINES.ENTRY_HYPERLINK]: (node, next) => {
//       return helpers.resolvers.inlines_entry_hyperlink(
//         node,
//         next(node.content)
//       );
//     }
//   }
// };

export default {
  name: 'Promo',
  props: {
    widget: Object
  },
  data: () => ({
    promo: Object
  }),
  computed: {
    image() {
      if (this.widget.backgroundImage.value.length > 0) {
        return this.widget.backgroundImage.value[0].url;
      }
      else
        return '';
    }
  }
};
</script>
<style lang="scss">
p {
  padding-bottom: 25px;
}
li p {
  padding-bottom: 0px;
}
</style>
