/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
import { constants } from '../../constants';

const state = {
  hires: '/highres/',
  thumb: '/thumb/',
  format: '.jpg',
};

// getters
const getters = {
  getHighResUrl: state => (id, index) => `${constants.BASE_URL}${state.hires}${id}/${index}${state.format}`,
  getThumbUrl: state => (id, index) => `${constants.BASE_URL}${state.thumb}${id}/${index}${state.format}`,
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
