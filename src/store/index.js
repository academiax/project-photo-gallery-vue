import Vue from 'vue';
import Vuex from 'vuex';

import photos from './photos';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    photos,
  },
  strict: debug,
});
