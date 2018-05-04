import Vue from 'vue'
import App from './App.vue'

import {store} from './store';
import router from './routes.js';

import VueNativeSock from 'vue-native-websocket'
//Vue.use(VueNativeSock, 'ws://nerfbear.com:8000/ws/', {store: store})
Vue.use(VueNativeSock, 'wss://echo.websocket.org', {
	store,
	format: 'json'
});


const vm = new Vue({
  el: '#app',
	store,
	router,
	VueNativeSock,
	render: h => h(App)
});
