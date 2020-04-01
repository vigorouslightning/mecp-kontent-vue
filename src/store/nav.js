import api from '@/api';
import { ItemResponses } from '@kentico/kontent-delivery';
var index = 0;

const state = {
  navItems: Array
};

const getters = {
  navItems: state => (state.navItems !== undefined ? state.navItems : [])
};

const mutations = {
  SET_NAV_ITEMS(state, navItems) {
    state.navItems = navItems;
  }
};

const actions = {
  async fetch({ commit }) {
    let parent = await api.kontent.getMainNav();
    let nav = mapChild(parent);
    commit('SET_NAV_ITEMS', nav);
    return nav;
  }
};

// In this function Children are mapped as the return object, 
//however Parent is type of Page and since that is an observable it is much harder to access it's properties
// This causes issues with the buildLink method in SubNav.vue
// parent: 

// parent is an array of 4 top level nav pages, Employers, Vehicles, Professionals, Study Guides
// second time through 
const mapChild = parent => {
  return parent.map(item => {
    // item is a Kentico page at this point
    const children = item.children.value;
    // children are Kentico pages at this point as well (if there are any)
    return {
      id: item.name.value,
      slug: item.slug.value,
      name: item.name.value,
      parent: {id: item.parent.value[0].name.value, slug: item.parent.value[0].slug.value, name: item.parent.value[0].name.value, parent: item.parent.value[0]},
      children:
         children !== undefined && children.length > 0 ? mapChild(children) : []
    };
  });
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default module;
