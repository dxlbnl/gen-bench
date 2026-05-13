<script lang="ts">
	import { page } from '$app/stores';

	let { children } = $props();

	const nav = [
		{ href: '/docs', label: 'Getting Started', exact: true },
		{ href: '/docs/api', label: 'API Reference' },
		{ href: '/docs/relational', label: 'Relational Guide' },
		{ href: '/docs/comparison', label: 'Library Comparison' }
	];

	const pathname = $derived($page.url.pathname);

	function isActive(href: string, exact = false): boolean {
		return exact ? pathname === href : pathname.startsWith(href);
	}
</script>

<div class="docs-layout">
	<aside class="docs-sidebar">
		<p class="sidebar-heading t-label">Documentation</p>
		{#each nav as item}
			<a
				href={item.href}
				class="docs-nav-link {isActive(item.href, item.exact) ? 'active' : ''}"
			>
				{item.label}
			</a>
		{/each}
	</aside>
	<div>
		{@render children()}
	</div>
</div>

<style>
	.sidebar-heading {
		color: var(--text-muted);
		padding: var(--space-1) var(--space-3);
		margin-bottom: var(--space-1);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
</style>
