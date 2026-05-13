<script lang="ts">
	import FeatureMatrix from '$lib/components/Surfaces/FeatureMatrix.svelte';
	import SummaryCard from '$lib/components/Surfaces/SummaryCard.svelte';
	import Button from '$lib/components/Primitives/Button.svelte';

	const features = [
		{ label: 'Zod v4 schemas', zod4mock: 'yes' as const, zodmock: 'no' as const, faker: 'na' as const },
		{ label: 'Relational / cross-entity IDs', zod4mock: 'yes' as const, zodmock: 'no' as const, faker: 'no' as const },
		{ label: 'Type-safe output', zod4mock: 'yes' as const, zodmock: 'yes' as const, faker: 'no' as const },
		{ label: 'Seeded / deterministic', zod4mock: 'yes' as const, zodmock: 'no' as const, faker: 'yes' as const },
		{ label: 'No schema required', zod4mock: 'no' as const, zodmock: 'no' as const, faker: 'yes' as const },
		{ label: 'Handles discriminated unions', zod4mock: 'yes' as const, zodmock: 'partial' as const, faker: 'na' as const }
	];
</script>

<div class="page">
	<header class="hero">
		<h1 class="t-large">Schema-driven mocks,<br />done right for Zod 4</h1>
		<p class="t-base" style="color:var(--text-muted);max-width:520px;margin-top:var(--space-3)">
			<strong style="color:var(--accent)">zod4-mock</strong> generates type-safe mock data from your
			Zod schemas — faster than the alternatives, with relational consistency across entities.
		</p>
		<div class="ctas">
			<Button label="Run benchmarks →" variant="primary" onclick={() => (window.location.href = '/bench')} />
			<Button label="See relational demo" onclick={() => (window.location.href = '/showcase')} />
		</div>
	</header>

	<section class="summary-cards">
		<SummaryCard headline="~3×" description="faster than zod-mock on flat schemas" />
		<SummaryCard
			headline="7"
			unit="entity types"
			description="in the relational e-commerce showcase"
			color="var(--success)"
		/>
		<SummaryCard headline="Zod 4" description="full schema coverage — no feature gaps" color="var(--warning)" />
	</section>

	<section class="matrix-section">
		<h2 class="t-title" style="margin-bottom:var(--space-4)">Feature comparison</h2>
		<FeatureMatrix {features} />
	</section>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}
	.hero {
		padding-top: var(--space-6);
	}
	.ctas {
		display: flex;
		gap: var(--space-3);
		margin-top: var(--space-5);
	}
	.summary-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-4);
	}
	.matrix-section {
		max-width: 640px;
	}
</style>
