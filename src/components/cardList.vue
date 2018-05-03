<template>
	<div class="cardList">
		<h1>List</h1>
		<card
			class="col-3"
			:data="items"
		>

		</card>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	import card from './card.vue';
	export default {
		components: {
			card
		},
		computed: {
				...mapGetters({
					items: 'cards/items'
				})
		}
	}
</script>

<style>

</style>