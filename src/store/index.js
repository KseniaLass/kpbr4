import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cards from './modules/cards';

export const store = new Vuex.Store({
	modules: {
		cards
	},
	strict: process.env.NODE_ENV !== 'production'
});