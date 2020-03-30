<template>
  <span>
    <strong>
      <a :href="href" :target="target">{{title}}</a>
    </strong>
    <span v-show="!isLast">&nbsp;|&nbsp;</span>
  </span>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    link: Object,
    isLast: Boolean
  },
  computed: {
    title() {
      return this.link.link_title.value;
    },
    href() {
      return this.link.link_target.value;
    },
    target() {
        return false; //this.link.newTab.value ? '_blank' : '';
    },
  }
};
</script>
