<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import {
		Chart,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend
	} from 'chart.js';
	import type { BenchResult } from '$lib/bench';

	Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

	interface LibResult {
		label: string;
		color: string;
		warm: BenchResult | null;
		cold: number | null;
	}

	interface Props {
		results: LibResult[];
	}

	let { results }: Props = $props();

	const data = $derived({
		labels: ['Warm (ops/sec)', 'Cold start (ms)'],
		datasets: results.map((r) => ({
			label: r.label,
			data: [
				r.warm ? Math.round(r.warm.opsPerSec) : 0,
				r.cold != null ? Math.round(r.cold) : 0
			],
			backgroundColor: r.color + 'cc',
			borderColor: r.color,
			borderWidth: 1,
			borderRadius: 4
		}))
	});

	const options = {
		indexAxis: 'y' as const,
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				callbacks: {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					label: (ctx: any) => {
						const isWarm = (ctx.dataIndex as number) === 0;
						const val = ctx.parsed.x as number;
						const libLabel = (ctx.dataset.label as string | undefined) ?? '';
						return `${libLabel}: ${isWarm ? `${val.toLocaleString()} ops/sec` : `${val}ms`}`;
					}
				}
			}
		},
		scales: {
			x: {
				ticks: { color: '#8888a0', font: { family: 'JetBrains Mono', size: 11 } },
				grid: { color: '#252533' }
			},
			y: {
				ticks: { color: '#e8e8f0', font: { size: 12 } },
				grid: { color: '#252533' }
			}
		}
	};
</script>

<div class="chart-wrap">
	<Bar {data} {options} />
</div>

<style>
	.chart-wrap {
		width: 100%;
		height: 220px;
	}
</style>
