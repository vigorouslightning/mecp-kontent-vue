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

import helpers from '@/helpers';

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
      if (cta.callToAction.value.length > 0) {
        return cta.callToAction.value[0].slug.value;
      } else if (cta.internalAsset.value.length > 0) {
        return cta.internalAsset.value[0].url;
      } else if (cta.externalUrl.value !== '') {
        return cta.externalUrl.value;
      } else throw 'Not handled or no link present';
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
