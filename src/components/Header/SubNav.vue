<template>
<div>
  <div class="row subnav" v-if="display">
    <div class="scrollable">
      <ul>
        <li v-if="hideOverview" :class="isCurrent($route.params.slug)">
          <router-link :to="{ name: 'page', params: { slug: $route.params.slug } }">
            Overview
          </router-link>
        </li>
        <li
          v-for="item in subNav"
          :key="item.slug"
          :class="isCurrent(item.slug)"
        >
          <router-link
            :to="{
              path: buildLink(item),
              params: { slug: item.slug, id: item.id }
            }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import api from '@/api';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SubNav',
  data: () => ({
    subNav: Array,
    hideOverview: Boolean,
  }),
  computed: {
    ...mapState('nav', ['navItems']),
    slug() {
      return this.$route.params.slug;
    },
    display() {
      return true;
      //return Array.isArray(this.subNav) && this.subNav.length > 0
    }
  },
  watch: {
    $route() {
      this.buildSubNav();
    }
  },
  created() {
    this.buildSubNav();
  },
  methods: {
    ...mapActions({
      fetchNav: 'nav/fetch'
    }),
    buildLink(item) {
      let parents = getParent(item.parent);
      return `/${parents.join('/')}/${item.slug}`;
    },
    async buildSubNav() {
      this.hideOverview = true;
      let route = this.$route;
      let n = this.navItems;
      let nav =
        n === undefined || n.length === 0 || n[0] === undefined
          ? await this.fetchNav()
          : n;
      let slug = route.params.slug;
      let subNav = nav.find(n => n.slug === slug);
      if (subNav === undefined) {
        let response = await api.contentful.bySlug(slug);
        let a = [];
        this.hideOverview = false;
        for (let child of response.parent.children.value) a.push(child);
        this.subNav = a;
      } else this.subNav = subNav.children;
    },
    isCurrent(item) {
      let route = this.$route;
      if (
        (item === route.params.slug && route.params.subPage === undefined) ||
        route.params.subPage === item
      )
        return 'current-page';
    }
  }
};

  // Second time through I am getting an Observe Object as child.  THe parent is a differnet object
  // The only way to get it is child[0].slug.value
  // Lots of wonkiness with this stemming from the getNavigation Child/Parent differents

  // How does router link stay active for top level pages??
const getParent = child => {
  let parents = [];

  // Create closeure for parent array
  function _getParent(_child) {
    let slug = _child.slug;
    if (slug !== undefined && _child.parent !== undefined && typeof(slug) === 'string') {
      parents.push(slug);
      _getParent(_child.parent);
    }
  }

  _getParent(child);

  return parents;
};
</script>
