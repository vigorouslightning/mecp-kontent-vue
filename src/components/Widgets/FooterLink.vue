<template>
  <span>
    <strong>
      <a :href="href">{{title}}</a>
    </strong>
    <span v-show="!isLast">&nbsp;|&nbsp;</span>
  </span>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    link: Object,
    isLast: Boolean
  },
  computed: {
    title() {
      return this.link.title.value;
    },
    href() {
      return `/${this.link.slug.value}`;
    },
  }
};
</script>
