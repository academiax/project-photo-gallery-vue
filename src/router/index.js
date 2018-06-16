import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Photos from '@/components/Photos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'uk-alert-primary',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/:galleryId',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/:galleryId/:codeId',
      name: 'Photos',
      component: Photos,
    },
  ],
});
