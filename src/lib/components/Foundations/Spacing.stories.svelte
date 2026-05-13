<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	const { Story } = defineMeta({ title: 'Foundations/Spacing' });
</script>

<Story name="Scale">
	<div style="display:flex;flex-direction:column;gap:8px;padding:24px">
		{#each [
			['--space-1','4px'],['--space-2','8px'],['--space-3','12px'],
			['--space-4','16px'],['--space-5','24px'],['--space-6','32px'],['--space-8','48px']
		] as [token, value]}
			<div style="display:flex;align-items:center;gap:12px">
				<div style="width:var({token});height:var({token});background:var(--accent);border-radius:2px;flex-shrink:0"></div>
				<span class="t-mono" style="color:var(--text-muted);width:60px">{value}</span>
				<span class="t-caption">{token}</span>
			</div>
		{/each}
	</div>
</Story>
