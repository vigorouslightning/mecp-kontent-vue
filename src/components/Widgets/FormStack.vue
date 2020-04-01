<template>
  <section>
  <iframe frameborder="0" :height="height"  :width="width" :src="src" :title="name"></iframe>
  </section>
</template>

<script>
export default {
  name: 'FormStack',
  props: {
    widget: Object
  },
  computed: {
    width() {
      return this.widget.width.value ? `${this.widget.width.value}px` : '100%';
    },
    height() {
      return this.widget.height.value ? `${this.widget.height.value}px` : '100%';
    },
    src() {
      return `https://cea.formstack.com/forms/${this.widget.slug.value}`;
    },
    name() {
      return this.widget.name.value;
    }
  }
};
</script>
