import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//import cards from './modules/cards';

export const store = new Vuex.Store({
	namespaced: true,
	state: {
		items: {},
		itemsLoaded: false,
		socket: {
			state: 'wait...',
			message: ''
		}
	},
	getters: {
		items(state) {
			return state.items;
		},
		itemsLoaded(state) {
			return state.itemsLoaded;
		},
		getPairByName: (state, getters) => (name) => {
			console.log(111)
			return getters.items[name];
		},
		getNumbersByPair: (state, getters) => (pair) => {
			console.log(pair)
			return getters.getPairByName(pair)
		},
		socketState(state) {
			return state.socket.state;
		}
	},
	mutations: {
		setItems(state, items) {
			state.items = items;
			state.itemsLoaded = true;
		},
		SOCKET_ONOPEN: (state, event) => {
			state.socket.state = 'open';
			console.log(state)
			console.log(event)
		},
		SOCKET_ONMESSAGE: (state, message) => {
			state.items = message.data.exchanges_data;
		},
		SOCKET_ONERROR: (state, event) => {
			console.log('error' + event)
			state.socket.state = 'error';
		},
		SOCKET_ONCLOSE: (state, event) => {
			console.log('close' + event)
			state.socket.state = 'close';
		}
	},
	actions: {
		loadItems(store, mes) {
			console.log(Vue)
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});

function getProducts(){
	return {
		"exchanges_data": {
			"Kucoin": {
				"OCN/BTC": {
					"bids": [
						[
							0.0000033,
							102512.75
						],
						[
							0.00000329,
							239581.82
						],
						[
							0.00000328,
							416852.86
						],
						[
							0.00000327,
							145118.11
						],
						[
							0.00000326,
							1291752.92
						],
						[
							0.00000325,
							32932.99
						]
					],
					"asks": [
						[
							0.00000331,
							452373.49
						],
						[
							0.00000332,
							16284.94
						],
						[
							0.00000333,
							196995.01
						],
						[
							0.00000334,
							168680.56
						],
						[
							0.00000335,
							776146.83
						],
						[
							0.00000336,
							116935.33
						]
					]
				},
				"KCS/BTC": {
					"bids": [
						[
							0.0000033,
							102512.75
						],
						[
							0.00000329,
							239581.82
						],
						[
							0.00000328,
							416852.86
						],
						[
							0.00000327,
							145118.11
						],
						[
							0.00000326,
							1291752.92
						],
						[
							0.00000325,
							32932.99
						]
					],
					"asks": [
						[
							0.00000331,
							452373.49
						],
						[
							0.00000332,
							16284.94
						],
						[
							0.00000333,
							196995.01
						],
						[
							0.00000334,
							168680.56
						],
						[
							0.00000335,
							776146.83
						],
						[
							0.00000336,
							116935.33
						]
					]
				}
			},
			"Gate.io": {
				"OCN/BTC": {
					"bids": [
						[
							0.00000325,
							100
						],
						[
							0.00000323,
							44409.937
						],
						[
							0.00000322,
							21080.745
						],
						[
							0.0000032,
							20480.9594
						],
						[
							0.00000317,
							12875.4668
						],
						[
							0.00000312,
							1481.746
						],
						[
							0.00000304,
							39565.217
						],
						[
							0.00000301,
							39565.217
						],
						[
							0.000003,
							118997.913
						],
						[
							0.00000299,
							37683.256
						],
						[
							0.00000294,
							39565.217
						],
						[
							0.0000029,
							34482.758
						],
						[
							0.00000288,
							2604.166
						],
						[
							0.00000285,
							227473.684
						],
						[
							0.00000282,
							40000
						],
						[
							0.0000028,
							1000
						],
						[
							0.00000276,
							51
						],
						[
							0.00000275,
							209163.636
						],
						[
							0.00000272,
							788.03
						],
						[
							0.0000027,
							2596.296021
						],
						[
							0.00000265,
							10943.396
						],
						[
							0.00000261,
							24406.13
						],
						[
							0.0000026,
							1076.923
						],
						[
							0.00000259,
							7142.857
						],
						[
							0.00000255,
							70196.078
						],
						[
							0.00000251,
							43824.701
						],
						[
							0.0000025,
							7959.999
						],
						[
							0.00000245,
							6425.5157
						],
						[
							0.00000243,
							8196.7213
						],
						[
							0.00000241,
							131111.618
						],
						[
							0.0000024,
							12833.333
						],
						[
							0.0000023,
							100000
						],
						[
							0.00000224,
							21347.76922
						],
						[
							0.00000223,
							15000
						],
						[
							0.00000215,
							651.162
						]
					],
					"asks": [
						[
							0.00000329,
							43796.81476515
						],
						[
							0.00000332,
							600
						],
						[
							0.00000334,
							350
						],
						[
							0.00000338,
							237174.192
						],
						[
							0.00000339,
							58697.927
						],
						[
							0.00000341,
							844.25693431
						],
						[
							0.00000342,
							24123.691406
						],
						[
							0.00000343,
							2993.999
						],
						[
							0.00000349,
							350
						],
						[
							0.0000035,
							542334.5736914
						],
						[
							0.00000358,
							142571.421875
						],
						[
							0.00000359,
							996
						],
						[
							0.0000036,
							4924.453
						],
						[
							0.00000363,
							5000
						],
						[
							0.0000037,
							270.27
						],
						[
							0.00000372,
							5000
						],
						[
							0.00000374,
							12191.137
						],
						[
							0.00000375,
							382428.5
						],
						[
							0.00000378,
							13319.919
						],
						[
							0.0000038,
							35639.949
						],
						[
							0.00000384,
							5500
						],
						[
							0.00000385,
							327112.71875
						],
						[
							0.00000386,
							7363.421
						],
						[
							0.00000387,
							5000
						],
						[
							0.00000388,
							3333
						],
						[
							0.0000039,
							285641.03125
						],
						[
							0.00000396,
							252.525
						],
						[
							0.000004,
							27315.958
						],
						[
							0.00000419,
							8000
						],
						[
							0.0000042,
							29099.3824
						],
						[
							0.00000423,
							3760.356
						],
						[
							0.00000426,
							242599.116
						],
						[
							0.00000428,
							5000
						],
						[
							0.00000439,
							6472.017
						],
						[
							0.00000443,
							9855.207
						]
					]
				}
			}
		}
	}
}