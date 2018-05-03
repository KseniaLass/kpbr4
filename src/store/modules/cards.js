import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		items: {},
		itemsLoaded: false
	},
	getters: {
		items(state) {
			return state.items;
		},
		itemsLoaded(state) {
			return state.itemsLoaded;
		}
	},
	mutations: {
		setItems(state, items) {
			state.items = items;
			state.itemsLoaded = true;
		}
	},
	actions: {
		loadItems(store) {
			if(!store.state.itemsLoaded) {
				// Vue.http.get('products.php')
				// 		.then((response) => {
				// 			store.commit('setItems', response.data);
				// 		});
				setTimeout(()=>{
					store.commit('setItems', getProducts())
				}, 500)
			}
		}
	}
}


function getProducts(){
	return {
		'CS/BTH': {
			sale: [
				{
					price: 0.0000070,
					count: 4,
					volume: 0.29
				},
				{
					price: 0.0000080,
					count: 5,
					volume: 0.5
				}
			],
			buy: [
				{
					price: 0.0000070,
					count: 4,
					volume: 0.29
				},
				{
					price: 0.0000080,
					count: 5,
					volume: 0.5
				}
			]
		},
		'KCS/BTH': {
			sale: [
				{
					price: 0.0000020,
					count: 3,
					volume: 0.6
				},
				{
					price: 0.0000020,
					count: 4,
					volume: 0.9
				}
			],
			buy: [
				{
					price: 0.0000030,
					count: 8,
					volume: 0.5
				},
				{
					price: 0.0000030,
					count: 5,
					volume: 0.1
				}
			]
		}
	}
}