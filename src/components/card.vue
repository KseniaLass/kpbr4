<template>
	<div class="card">
		{{currentNumbers}}
		<table class="card__sale">
			<thead>
				<tr>
					<th>Price ETH</th>
					<th>Amount CS</th>
					<th>Volume ETH</th>
				</tr>
			</thead>
			<tbody>
				<tr></tr>
			</tbody>
		</table>
		<table class="card__buy">
			<thead>
			<tr>
				<td></td>
			</tr>
			</thead>
		</table>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		props: {
			pair: {
				type: String,
				required: true
			}
		},
		computed: {
			...mapGetters({
				numberList: 'cards/getNumbersByPair'
			}),
			currentNumbers() {
				return this.numberList(this.pair)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		background: #252b38;
		border: 1px solid rgba(255, 255, 255, 0.05);
		color: #7685a9;
	}
</style>