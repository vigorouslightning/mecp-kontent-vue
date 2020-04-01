<template>
  <div class="col-xs-6 col-sm-4 col-lg-3 logo">
    <a class="sticky-logo" href="/">
      <img
        class="pull-left"
        :src="logo"
        alt
      />
    </a>
  </div>
</template>

<script>

import api from '@/api';
export default {
  name: 'Logo',
  props: {},
  data: () => ({
    logo: Object
  }),
  computed: {},
  watch: {
    $route() {
      this.init();
    }
  },
  created: function() {
    this.init();
  },
  mounted: function() {},
    methods: {
    async byId(id) {
      this.logo = 'https://assets-us-01.kc-usercontent.com/2f957d12-d69d-00a1-bdf9-fb08ef04dfa5/4218a351-2edf-48ea-9ed5-a9e8e192c742/MECPLogo.png'; //(await api.contentful.getAsset(id)).fields.file.url;
    },
    init() {
      let id = process.env.VUE_APP_HOMEPAGE_LOGO; //this seems like more work than just updating the logo directly.
      this.byId(id);
    }
  }
};
</script>
