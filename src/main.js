// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import Krpano from "vue-krpano";
Vue.use(Krpano);

import 'jquery';
import * as SpriteSpin from "spritespin";
/*MintUI*/
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

/*Vuex*/
import Vuex from 'vuex';
Vue.use(Vuex);

/*引入store*/
import store from "./store";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
