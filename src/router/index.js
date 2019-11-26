import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CmsWrapper from '../views/CmsWrapper.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:cmsId',
    name: 'cms',
    component: CmsWrapper,
    meta: {
      title: 'CMS',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
