<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <Header v-bind:sticky="sticky" />
    <hero v-bind:hero="hero" />
    <About v-bind:about="about" />
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
import Header from '@/components/Header';

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
    Promo,
    Header
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({
    content: Array,
    pageTitle: String,
    promos: Object,
    sticky: true
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
        title: this.content.pageTitle.value,
        logo: this.content.mecpLogo.value[0].url,
        text: this.content.introText.value,
      }
    }
  },
  mounted: async function() {
    await this.getContent();
    let _this = this;
    window.addEventListener('scroll', function() {
      var header = document.querySelector('.page-section-header');
      var scrollTop = parseInt(window.scrollY);
      var otherTop = parseInt(document.getElementById('mission-statement').offsetTop);
      var headerHeight = parseInt(header.offsetHeight);

      if (otherTop - scrollTop <= headerHeight + 50) {
        _this.sticky = true;
      } else {
        _this.sticky = false;
      }
    });
    this.sticky = false;
  },
  destroyed() {
    window.removeEventListener('scroll')
  },
  methods: {
    async getContent() {
      this.content = await api.kontent.getHomePage();
    }
  }
};
</script>
