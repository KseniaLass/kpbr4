import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CardList from './pages/cardList';

import {store} from './store';

const routes = [
	{
		name: 'list',
		path: '',
		component: CardList,
		beforeEnter(from, to, next) {
			//store.dispatch('loadItems');
			next();
		}
	}
];

export default new VueRouter({
	routes,
	mode: 'history'
})