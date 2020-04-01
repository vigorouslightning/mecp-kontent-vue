<template>
  <section>
    <div style="position: relative; display: block; max-width: 600px;">
      <div style="padding-top: 56.25%;">
        <iframe
          frameborder="0"
          :height="height"
          :src="widget.link.value"
          :title="widget.name.value"
          :width="width"
          :allow="fullscreen"
          :mozallowfullscreen="allowFullscreen"
          :webkitallowfullscreen="allowFullscreen"
          style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EmbeddedVido',
  props: {
    widget: Object
  },
  computed: {
    width() {
      return this.widget.width.value
        ? `${this.widget.width.value}px`
        : '100%';
    },
    height() {
      return this.widget.height.value
        ? `${this.widget.height.value}px`
        : '100%';
    },
    fullscreen() {
      return this.widget.allowfullscreen.value[0].name ? 'allowfullscreen' : '';
    },
    allowFullscreen() {
      return this.widget.allowfullscreen.value[0].name;
    },
  }
};
</script>
