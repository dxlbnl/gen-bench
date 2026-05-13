<script module>
	export { default as CodeBlock } from '$lib/components/Docs/CodeBlock.svelte';
	export { default as SchemaPlayground } from '$lib/components/Docs/SchemaPlayground.svelte';
	export { default as RelationCallout } from '$lib/components/Showcase/RelationCallout.svelte';
	export { default as FeatureMatrix } from '$lib/components/Surfaces/FeatureMatrix.svelte';
</script>

<div class="docs-prose">
	<slot />
</div>
