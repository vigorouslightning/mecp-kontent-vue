import api from '@/api';

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

const mapChild = parent => {
  console.log('parent: ' + parent);
  return parent.map(item => {
    const children = item.children.value;
    return {
      id: 'test',
      slug: item.slug.value,
      name: item.name.value,
      parent: item.parent.value,
      // children:
      //   children !== undefined && children.value.length > 0 ? mapChild(children) : []
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
