/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
import { Gallery } from '../../models/gallery';
import { constants } from '../../constants';

const state = {
  all: [],
};

// getters
const getters = {
  getGalleryById: state => (id) => {
    const gallery = state.all.find(g => g.id === id);
    return gallery || new Gallery();
  },
};

// actions
const actions = {
  fetchAll({ commit }) {
    fetch(`${constants.BASE_URL}/json/galleries.json`)
      .then(response => response.json())
      .then(data => commit('FETCH_ALL', data))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
};

// mutations
const mutations = {
  FETCH_ALL(state, galleries) {
    state.all = galleries;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
