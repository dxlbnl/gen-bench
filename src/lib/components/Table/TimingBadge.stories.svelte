<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TimingBadge from './TimingBadge.svelte';
	const { Story } = defineMeta({ title: 'Table/TimingBadge', component: TimingBadge });
</script>

<Story name="Generate" args={{ label: 'Generated 10 000 rows in', ms: 42.3 }}>
	<div style="padding:24px"><TimingBadge label="Generated 10 000 rows in" ms={42.3} /></div>
</Story>
<Story name="Render" args={{ label: 'Render time', ms: 180.5 }}>
	<div style="padding:24px"><TimingBadge label="Render time" ms={180.5} /></div>
</Story>
<Story name="No data" args={{ label: 'Not measured', ms: null }}>
	<div style="padding:24px"><TimingBadge label="Not measured" ms={null} /></div>
</Story>

<Story name="Both badges">
	<div style="display:flex;gap:8px;padding:24px">
		<TimingBadge label="Generated 1 000 rows in" ms={12.4} />
		<TimingBadge label="Render time" ms={95.1} />
	</div>
</Story>
