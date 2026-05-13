<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RelationCallout from './RelationCallout.svelte';
	const { Story } = defineMeta({ title: 'Showcase/RelationCallout', component: RelationCallout });

	const proofs = [
		{
			label: 'review.userId',
			value: '3f6e1a2b-c3d4-5e6f-7a8b-9c0d1e2f3a4b',
			resolves: 'User #3'
		},
		{
			label: 'review.productId',
			value: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
			resolves: 'Product #7'
		},
		{
			label: 'order.userId',
			value: '3f6e1a2b-c3d4-5e6f-7a8b-9c0d1e2f3a4b',
			resolves: 'User #3'
		}
	];
</script>

<Story name="Default">
	<div style="max-width:480px;padding:24px">
		<RelationCallout {proofs} />
	</div>
</Story>
