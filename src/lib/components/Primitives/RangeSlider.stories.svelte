<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import RangeSlider from './RangeSlider.svelte';
	const { Story } = defineMeta({ title: 'Primitives/RangeSlider', component: RangeSlider });
</script>

<Story name="Default" args={{ value: 100, min: 10, max: 10000 }}>
	<div style="width:320px;padding:24px">
		<RangeSlider value={100} min={10} max={10000} />
	</div>
</Story>
