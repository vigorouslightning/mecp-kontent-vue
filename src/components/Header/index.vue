<template>
  <header class="page-section-header container-fluid" :class="showSticky">
    <div class="row">
      <Logo />
      <Nav />
    </div>
    <SubNav v-if="isHome" />
  </header>
</template>

<script>
import Logo from './Logo';
import Nav from './Nav';
import SubNav from './SubNav'

export default {
  name: 'Header',
  props: {
    sticky: Boolean
  },
  components: {
    Logo,
    Nav,
    SubNav
  },
  computed: {
    showSticky() {
      return this.sticky ? 'sticky' : '';
    },
    isHome() {
      return this.$route.name !== 'home';
    }
  }
};
</script>
