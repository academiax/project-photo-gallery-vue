/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
import { Photo } from '../../models/photo';

const state = {
  all: [],
};

// getters
const getters = {
  getPhotosById: state => (id) => {
    const photo = state.all.find(gallery => gallery.id === id);
    return photo || new Photo();
  },
};

// actions
const actions = {
  fetchAll({ commit }) {
    fetch('https://raw.githubusercontent.com/xrochoa/photo-gallery-resources/master/json/photos.json')
      .then(response => response.json())
      .then(data => commit('FETCH_ALL', data))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  },
};

// mutations
const mutations = {
  FETCH_ALL(state, photos) {
    state.all = photos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
