<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LibraryLegend from './LibraryLegend.svelte';
	const { Story } = defineMeta({ title: 'Bench/LibraryLegend', component: LibraryLegend });
</script>

<Story name="Default">
	<div style="padding:24px">
		<LibraryLegend />
	</div>
</Story>
