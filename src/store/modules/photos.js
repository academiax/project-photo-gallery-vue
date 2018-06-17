/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
import { Photo } from '../../models/photo';
import { constants } from '../../constants';

const state = {
  all: [],
};

// getters
const getters = {
  getPhotosById: state => (id) => {
    const photo = state.all.find(p => p.id === id);
    return photo || new Photo();
  },
};

// actions
const actions = {
  fetchAll({ commit }) {
    fetch(`${constants.BASE_URL}/json/photos.json`)
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
