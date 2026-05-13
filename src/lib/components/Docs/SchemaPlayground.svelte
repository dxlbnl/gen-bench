<script lang="ts">
	import { untrack } from 'svelte';
	import * as z from 'zod';
	import { generate } from 'zod4-mock';
	import Editor from './Editor.svelte';
	import JsonTree from '$lib/components/Showcase/JsonTree.svelte';
	import Button from '$lib/components/Primitives/Button.svelte';

	interface Props {
		initialCode?: string;
	}

	const DEFAULT_CODE = `z.object({
  name: z.string(),
  age: z.number().int().min(0).max(120),
  email: z.string().email()
})`;

	let { initialCode = DEFAULT_CODE }: Props = $props();

	let code = $state(untrack(() => initialCode));
	let output = $state<unknown>(null);
	let error = $state<string | null>(null);

	function run() {
		error = null;
		try {
			const fn = new Function('z', '"use strict"; return (' + code + ')');
			output = generate(fn(z));
		} catch (e) {
			error = e instanceof Error ? e.message : String(e);
			output = null;
		}
	}
</script>

<div class="playground">
	<div class="editor-area">
		<Editor bind:value={code} height="160px" />
	</div>
	<div class="toolbar">
		<Button label="Generate" variant="primary" onclick={run} />
		{#if error}
			<span class="error t-caption">{error}</span>
		{/if}
	</div>
	{#if output !== null}
		<div class="output">
			<JsonTree value={output} />
		</div>
	{/if}
</div>

<style>
	.playground {
		border: 1px solid var(--border);
		border-radius: 8px;
		overflow: hidden;
		margin: var(--space-3) 0;
	}

	.editor-area {
		border-bottom: 1px solid var(--border);
	}

	.toolbar {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		background: var(--bg-base);
		border-bottom: 1px solid var(--border);
	}

	.error {
		color: var(--danger);
		font-family: var(--font-mono);
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.output {
		padding: var(--space-4);
		font-family: var(--font-mono);
		font-size: 12px;
		max-height: 320px;
		overflow: auto;
		background: var(--bg-raised);
	}
</style>
