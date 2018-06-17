/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
const state = {
  baseUrl: 'https://raw.githubusercontent.com/xrochoa/photo-gallery-resources/master/',
  hires: 'highres/',
  thumb: 'thumb/',
  format: '.jpg',
};

// getters
const getters = {
  getHighResUrl: state => (id, index) => `${state.baseUrl}${state.hires}${id}/${index}${state.format}`,
  getThumbUrl: state => (id, index) => `${state.baseUrl}${state.thumb}${id}/${index}${state.format}`,
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
