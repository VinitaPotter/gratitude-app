import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCv9Rrd3dS2G_Sdpi6uDQOSe5OR4jPRj_U",
  authDomain: "gratitude-app-195b6.firebaseapp.com",
  databaseURL: "https://gratitude-app-195b6.firebaseio.com",
  projectId: "gratitude-app-195b6",
  storageBucket: "gratitude-app-195b6.appspot.com",
  messagingSenderId: "832440527485"
};
firebase.initializeApp(config);

let router = new VueRouter({
  routes: Routes, 
  mode:'history',
});


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next()
  else if (!requiresAuth && currentUser) next('/home')
  else next()
})

export default router;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
