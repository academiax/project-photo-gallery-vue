import Vue from 'vue';
import Vuex from 'vuex';

import galleries from './modules/galleries';
import photos from './modules/photos';
import resources from './modules/resources';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    photos,
    galleries,
    resources,
  },
  strict: debug,
  plugins: [],
});
