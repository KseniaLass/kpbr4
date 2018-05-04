<template>
	<div class="pomoika">
		<div class="pomoika__header">
			{{id}}
		</div>
		<div class="pomoika__body">
			<div
				class="pomoika__pair pair"
				v-for="(pair, key) in currentPairs"
				:key="key"
			>
				<div class="pair__header">
					{{key}}
				</div>

				<div class="pair__body">
					<table class="pair__table table table_head">
						<tbody>
							<tr>
								<td>Price ETH</td>
								<td>Amount CS</td>
								<td>Volume ETH</td>
							</tr>
						</tbody>
					</table>
					<VueScrollbar class="pair__block">
						<table class="pair__table table table_bids">
							<tbody>
								<tr
									v-for="(bids, key) in pair.bids"
								>
									<td v-for="number in bids">{{number}}</td>
									<td  v-if="bids.length < 3" ></td>
								</tr>
							</tbody>
						</table>
					</VueScrollbar>
					<VueScrollbar class="pair__block">
						<table class="pair__table table table_asks">
							<tbody>
								<tr v-for="(asks, key) in pair.asks"
								>
									<td v-for="number in asks">{{number}}</td>
									<td v-if="asks.length < 3"></td>
								</tr>
							</tbody>
						</table>
					</VueScrollbar>
				</div>

			</div>
		</div>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	import card from './card.vue';

	import VueScrollbar from 'vue-perfect-scrollbar'

	export default {
		components: {
			//card,
			VueScrollbar
		},
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				settings: {
					maxScrollbarLength: 60
				}
			}
		},
		methods: {
			scrollHanle(evt) {
				console.log(evt)
			}
		},
		computed: {
			...mapGetters({
				pomoikaList: 'cards/getPairByName'
			}),
			currentPairs() {
				return this.pomoikaList(this.id)
			}
		}
	}
</script>

<style lang="scss">
	.pomoika {
		border: 1px solid rgba(255, 255, 255, 0.05);
		margin-bottom: 27px;
		height: calc(50vh - 38px);
		&__header {
			background: rgba(255, 255, 255, 0.05);
			padding: 10px 15px;
			font-size: 18px;
		}
		&__body {
			padding:10px;
			display: flex;
			flex-flow: row wrap;
			margin: 0 -1%;
		}
	}

	.pair {
		width:33%;
		margin: 0 1%;
		border: 1px solid rgba(255, 255, 255, 0.05);
		&__header {
			background: rgba(255, 255, 255, 0.05);
			padding: 10px 15px;
			font-size: 14px;
		}
		&__body {
			padding: 10px;
		}
		&__table {
			width: 100%;
			text-align: left;
		}
		&__block {
			height: 141px;
			overflow-y: auto;
			overflow-x: hidden;
			&:nth-child(2) {
				border-bottom:1px solid rgba(255, 255, 255, 0.05);
			}
		}
	}

	.table {
		td {
			width:33.33%;
			font-size: 14px;
		}
		&_head {
			color: #7685a9;
		}
		&_bids {
			color: #ff5f73;
		}
		&_asks {
			color: #01aa78;
		}
	}
	.ps>.ps__scrollbar-y-rail {
		opacity: 0.6 !important;
	}
	.ps:hover>.ps__scrollbar-y-rail:hover {
		background-color: transparent;
	}
	.ps.ps--active-x>.ps__scrollbar-x-rail, .ps.ps--active-y>.ps__scrollbar-y-rail {
		cursor: pointer;
	}


</style>