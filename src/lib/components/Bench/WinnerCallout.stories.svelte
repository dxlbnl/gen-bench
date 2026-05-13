<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import WinnerCallout from './WinnerCallout.svelte';
	const { Story } = defineMeta({ title: 'Bench/WinnerCallout', component: WinnerCallout });
</script>

<Story name="3x faster" args={{ ratio: 3.2, vsLabel: 'zod-mock' }}>
	<div style="padding:24px"><WinnerCallout ratio={3.2} vsLabel="zod-mock" /></div>
</Story>
<Story name="No result yet" args={{ ratio: null }}>
	<div style="padding:24px"><WinnerCallout ratio={null} /></div>
</Story>
