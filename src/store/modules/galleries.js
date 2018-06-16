/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
const state = {
  all: [
    {
      id: 'nps',
      name: 'National Parks',
      order: [
        'arch', 'deat', 'yose',
        'bryc', 'gran', 'josh',
        'lass', 'redw', 'crat',
        'cany', 'zion', 'capi',
        'mesa', 'olym', 'rain',
        'pinn', 'blac', 'sequ',
      ],
      suffix: 'National Park',
    },
    {
      id: 'oip',
      name: 'Other Inspiring Places',
      order: [
        'ante', 'hors', 'nava',
        'monu', 'natu', 'pink',
        'hoov', 'mexi', 'diam',
      ],
      suffix: '',
    },
  ],
};

// getters
const getters = {
  getGalleryById: state => id => state.all.find(photos => photos.id === id),
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
