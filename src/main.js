// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';

import '@vuikit/theme/dist/vuikit.min.css';

import App from './App';
import router from './router';
import store from './store';

// TODO import only used components https://vuikit.js.org/guide/integration
Vue.use(Vuikit);
Vue.use(VuikitIcons);

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
