<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import JsonTree from './JsonTree.svelte';
	const { Story } = defineMeta({ title: 'Showcase/JsonTree', component: JsonTree });

	const sample = {
		id: '3f6e1a2b-0000-0000-0000-000000000001',
		name: 'Alice Smith',
		email: 'alice@example.com',
		rating: 4,
		userId: '3f6e1a2b-0000-0000-0000-000000000002',
		productId: '3f6e1a2b-0000-0000-0000-000000000003',
		body: 'Great product!',
		createdAt: new Date('2024-01-15')
	};

	const highlightIds = new Set([
		'3f6e1a2b-0000-0000-0000-000000000002',
		'3f6e1a2b-0000-0000-0000-000000000003'
	]);
</script>

<Story name="Simple object">
	<div style="padding:24px;font-family:var(--font-mono);font-size:12px">
		<JsonTree value={sample} />
	</div>
</Story>

<Story name="With highlighted IDs">
	<div style="padding:24px;font-family:var(--font-mono);font-size:12px">
		<JsonTree value={sample} {highlightIds} />
	</div>
</Story>

<Story name="Nested array">
	<div style="padding:24px;font-family:var(--font-mono);font-size:12px">
		<JsonTree value={{ items: [{ id: 'a', qty: 2 }, { id: 'b', qty: 1 }], total: 49.99 }} />
	</div>
</Story>
