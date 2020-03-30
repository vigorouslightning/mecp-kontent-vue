<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <hero v-bind:hero="hero" />
    <!-- <About v-bind:about="about" /> -->
    <Promo
      v-for="(promo, index) in content.promoZone.value"
      :key="index"
      v-bind:widget="promo"
    />

  </section>
</template>

<script>
import Hero from '@/components/Homepage/Hero';
import About from '@/components/Homepage/About';
import Promo from '@/components/Homepage/Promo';

import api from '@/api';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';

// const textOptions = {
//   renderMark: {
//     [MARKS.BOLD]: text => `<strong>${text}</strong>`
//   },
//   // renderNode: {
//   //   [BLOCKS.PARAGRAPH]: (node, next) => {
//   //     return next(node.content);
//   //   }
//   // }
// };

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Promo
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({
    content: Array,
    pageTitle: String,
    promos: Object
  }),
  computed: {
    loaded() {
      return Object.keys(this.content).length > 0;
    },
    hero() {
      return {
        text: this.content.heroText.value,
        image: this.content.heroImage.value[0].url,
        links: [], //this.content.heroLinks
      }
    },
    about() {
      return {
        title: 'test', //this.content.pageTitle.value,
        logo: 'test.jpg', //this.content.mecpLogo.value.url,
        text: 'text'//this.content.text.value,
      }
    }
  },
  mounted: function() {
    this.getContent();
  },
  methods: {
    async getContent() {
      console.log('before response');
      let something = await api.kontent.getHomePage();
      //console.log('after response: ' + JSON.stringify(something));
      this.content = something;
    }
  }
};
</script>
