<script lang="ts">
	import { onMount } from 'svelte';
	import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
	import { EditorState } from '@codemirror/state';
	import { javascript } from '@codemirror/lang-javascript';
	import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
	import {
		indentOnInput,
		bracketMatching,
		syntaxHighlighting,
		defaultHighlightStyle
	} from '@codemirror/language';

	interface Props {
		value?: string;
		onchange?: (v: string) => void;
		height?: string;
		readonly?: boolean;
	}

	let { value = $bindable(''), onchange, height = '180px', readonly = false }: Props = $props();

	let container: HTMLDivElement;
	let view: EditorView | undefined;

	const theme = EditorView.theme(
		{
			'&': {
				background: '#0a0a0f',
				color: '#e8e8f0',
				fontFamily: "'JetBrains Mono', monospace",
				fontSize: '13px',
				height: '100%'
			},
			'.cm-content': { caretColor: '#a78bfa', padding: '12px 0' },
			'.cm-cursor': { borderLeftColor: '#a78bfa' },
			'.cm-activeLine': { background: 'rgba(167,139,250,0.06)' },
			'&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
				background: 'rgba(167,139,250,0.2) !important'
			},
			'.cm-gutters': {
				background: '#14141c',
				color: '#8888a0',
				border: 'none',
				borderRight: '1px solid #252533'
			},
			'.cm-lineNumbers .cm-gutterElement': { padding: '0 8px' },
			'.cm-scroller': { overflow: 'auto' },
			'.tok-keyword': { color: '#c084fc' },
			'.tok-string': { color: '#86efac' },
			'.tok-number': { color: '#fb923c' },
			'.tok-comment': { color: '#52525b', fontStyle: 'italic' },
			'.tok-propertyName': { color: '#93c5fd' },
			'.tok-typeName': { color: '#a78bfa' },
			'.tok-operator': { color: '#8888a0' },
			'.tok-punctuation': { color: '#8888a0' }
		},
		{ dark: true }
	);

	onMount(() => {
		const state = EditorState.create({
			doc: value,
			extensions: [
				history(),
				javascript(),
				theme,
				syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
				lineNumbers(),
				highlightActiveLine(),
				bracketMatching(),
				indentOnInput(),
				keymap.of([...defaultKeymap, ...historyKeymap]),
				EditorView.updateListener.of((update) => {
					if (update.docChanged) {
						value = update.state.doc.toString();
						onchange?.(value);
					}
				}),
				EditorView.editable.of(!readonly)
			]
		});

		view = new EditorView({ state, parent: container });

		return () => view?.destroy();
	});

	// Sync external value prop into editor without triggering onchange
	$effect(() => {
		if (view && value !== view.state.doc.toString()) {
			view.dispatch({
				changes: { from: 0, to: view.state.doc.length, insert: value }
			});
		}
	});
</script>

<div bind:this={container} class="editor-wrap" style="height:{height}"></div>

<style>
	.editor-wrap {
		border: 1px solid var(--border);
		border-radius: 6px;
		overflow: hidden;
		background: #0a0a0f;
	}

	.editor-wrap :global(.cm-editor) {
		height: 100%;
	}

	.editor-wrap :global(.cm-scroller) {
		overflow: auto;
	}
</style>
