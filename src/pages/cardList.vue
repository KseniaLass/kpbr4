<template>
	<div class="cardList">
		<pomoika
			v-for="(item, key) in items"
			:key="key"
			:id="key"
		>
		</pomoika>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	import pomoika from '../components/pomoika.vue';
	import card from '../components/card.vue';

	export default {
		components: {
			pomoika
		},
		computed: {
			...mapGetters({
				items: 'cards/items'
			})
		}
	}
</script>

<style>
	/*.cardList {*/
		/*margin: 0 -1%;*/
		/*display: flex;*/
		/*flex-flow: row wrap;*/
		/*justify-content: flex-start;*/
	/*}*/
</style>