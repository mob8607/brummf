import firebase from 'firebase/app';
import StoryblokVue from 'storyblok-vue';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

Vue.use(StoryblokVue);

Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCx5HsT47bYwgeBQvskoW8JmwWKaH-8oDY',
  authDomain: 'brummf-34d31.firebaseapp.com',
  databaseURL: 'https://brummf-34d31.firebaseio.com',
  projectId: 'brummf-34d31',
  storageBucket: 'brummf-34d31.appspot.com',
  messagingSenderId: '286051783231',
  appId: '1:286051783231:web:8ce930a7050a1949d59e8a',
  measurementId: 'G-VZVTDL2EXS',
};

console.log('here');
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
