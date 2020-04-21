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
      <div v-if="showLearnMoreLink" class="row">
        <div class="col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4">
          <router-link
            :to="{
              name: 'page',
              params: {
                slug: widget.linkedPage.value[0].slug.value,
                id: 'widget.linkedPage.value[0].slug.value'
              }
            }"
            class="link-button"
          >
            Learn More
            <span>&gt;</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import helpers from '@/helpers';

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
    },
    showLearnMoreLink() {
      return this.widget.linkedPage.value.length > 0;
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
