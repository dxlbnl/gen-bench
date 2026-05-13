<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DataTable from './DataTable.svelte';
	const { Story } = defineMeta({ title: 'Table/DataTable', component: DataTable });

	const rows = Array.from({ length: 20 }, (_, i) => ({
		id: `user-${i + 1}`,
		name: ['Alice Smith', 'Bob Jones', 'Carol White', 'Dave Brown'][i % 4],
		email: `user${i}@example.com`,
		city: ['Amsterdam', 'Berlin', 'London', 'Paris'][i % 4]
	}));

	const columns = [
		{ key: 'id' as const, label: 'ID' },
		{ key: 'name' as const, label: 'Name' },
		{ key: 'email' as const, label: 'Email' },
		{ key: 'city' as const, label: 'City' }
	];
</script>

<Story name="20 rows">
	<div style="max-width:700px;padding:24px">
		<DataTable {rows} {columns} />
	</div>
</Story>

<Story name="Filtered">
	<div style="max-width:700px;padding:24px">
		<DataTable {rows} {columns} filter="Alice" />
	</div>
</Story>
