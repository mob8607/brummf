import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

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

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

db.collection('leagues').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log('doc', doc);
    console.log(`${doc.id} => ${doc.data().title}`);
  });
});
