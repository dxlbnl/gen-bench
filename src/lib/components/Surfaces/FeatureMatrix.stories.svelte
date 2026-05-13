<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FeatureMatrix from './FeatureMatrix.svelte';
	const { Story } = defineMeta({ title: 'Surfaces/FeatureMatrix', component: FeatureMatrix });

	type CV = 'yes' | 'no' | 'partial' | 'na';
	const features: { label: string; zod4mock: CV; zodmock: CV; faker: CV }[] = [
		{ label: 'Zod v4 schemas', zod4mock: 'yes', zodmock: 'no', faker: 'na' },
		{ label: 'Relational / cross-entity IDs', zod4mock: 'yes', zodmock: 'no', faker: 'no' },
		{ label: 'Type-safe output', zod4mock: 'yes', zodmock: 'yes', faker: 'no' },
		{ label: 'Seeded / deterministic', zod4mock: 'yes', zodmock: 'no', faker: 'yes' },
		{ label: 'No schema required', zod4mock: 'no', zodmock: 'no', faker: 'yes' },
		{ label: 'Handles .refine()', zod4mock: 'partial', zodmock: 'no', faker: 'na' },
		{ label: 'Handles discriminated unions', zod4mock: 'yes', zodmock: 'partial', faker: 'na' }
	];
</script>

<Story name="Full matrix">
	<div style="max-width:600px;padding:24px">
		<FeatureMatrix {features} />
	</div>
</Story>
