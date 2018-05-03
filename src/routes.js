import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import CardList from './components/cardList';

import {store} from './store';

const routes = [
	{
		path:'',
		redirect: {name: 'list'}
	},
	{
		name: 'list',
		path: '/list',
		component: CardList,
		beforeEnter(from, to, next) {
			store.dispatch('cards/loadItems');
			next();
		}
	}
];

export default new VueRouter({
	routes,
	mode: 'history'
})