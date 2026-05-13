<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BenchChart from './BenchChart.svelte';
	const { Story } = defineMeta({ title: 'Bench/BenchChart', component: BenchChart });

	const mockResults = [
		{
			label: 'zod4-mock',
			color: '#a78bfa',
			warm: { avg: 0.024, min: 0.020, max: 0.030, opsPerSec: 41667, coldStart: 2.1 },
			cold: 2.1
		},
		{
			label: 'zod-mock',
			color: '#fbbf24',
			warm: { avg: 0.075, min: 0.060, max: 0.090, opsPerSec: 13333, coldStart: 8.4 },
			cold: 8.4
		},
		{
			label: 'faker',
			color: '#34d399',
			warm: { avg: 0.035, min: 0.030, max: 0.045, opsPerSec: 28571, coldStart: 3.2 },
			cold: 3.2
		}
	];
</script>

<Story name="With results">
	<div style="width:600px;padding:24px">
		<BenchChart results={mockResults} />
	</div>
</Story>

<Story name="Empty">
	<div style="width:600px;padding:24px">
		<BenchChart results={mockResults.map(r => ({ ...r, warm: null, cold: null }))} />
	</div>
</Story>
