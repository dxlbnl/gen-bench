<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import MetricBadge from './MetricBadge.svelte';
	const { Story } = defineMeta({ title: 'Bench/MetricBadge', component: MetricBadge });
</script>

<Story name="High ops" args={{ value: 42300, unit: 'ops/sec', label: 'zod4-mock', color: 'var(--lib-zod4mock)' }} />
<Story name="Medium ops" args={{ value: 13200, unit: 'ops/sec', label: 'zod-mock', color: 'var(--lib-zodmock)' }} />
<Story name="No data" args={{ value: null, unit: 'ops/sec', label: 'not run yet' }} />

<Story name="Row of badges">
	<div style="display:flex;gap:32px;padding:24px">
		<MetricBadge value={42300} unit="ops/sec" label="zod4-mock" color="var(--lib-zod4mock)" />
		<MetricBadge value={13200} unit="ops/sec" label="zod-mock" color="var(--lib-zodmock)" />
		<MetricBadge value={28900} unit="ops/sec" label="faker" color="var(--lib-faker)" />
	</div>
</Story>
