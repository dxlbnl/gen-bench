<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SegmentedControl from './SegmentedControl.svelte';
	const { Story } = defineMeta({ title: 'Primitives/SegmentedControl', component: SegmentedControl });
</script>

<Story
	name="Schema selector"
	args={{
		options: [
			{ value: 'flat', label: 'Flat' },
			{ value: 'nested', label: 'Nested' },
			{ value: 'array', label: 'Array' }
		],
		value: 'flat'
	}}
/>

<Story
	name="Row count"
	args={{
		options: [
			{ value: '100', label: '100' },
			{ value: '500', label: '500' },
			{ value: '1000', label: '1k' },
			{ value: '5000', label: '5k' }
		],
		value: '100'
	}}
/>
