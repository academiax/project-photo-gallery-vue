import Vue from 'vue';
import Router from 'vue-router';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Photos from '@/components/Photos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quote',
      component: Quote,
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
