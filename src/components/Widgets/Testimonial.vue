<template>
  <p>
    <em v-html="quote"></em>—{{source}}, {{title}}, {{company}}<br />
  </p>
</template>

<script>
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => `<strong>${text}</strong>`
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, next) => {
//         return next(node.content);
//     },
//   }
// };

export default {
  name: 'Testimonial',
  props: {
    widget: Object
  },
  computed: {
    quote() {
      return `&#8220;${this.widget.quote.value}&#8221;`;

    },
    source() {
      return this.widget.quoted_source.value;
    },
    title() {
      return this.widget.title.value;
    },
    company() {
      return this.widget.company.value;
    },
  }
};
</script>
