<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { within, expect, userEvent } from 'storybook/test';
	import SchemaPlayground from './SchemaPlayground.svelte';

	const { Story } = defineMeta({
		title: 'Docs/SchemaPlayground',
		component: SchemaPlayground,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvasElement.querySelector('.cm-editor')).toBeInTheDocument();
		await userEvent.click(canvas.getByRole('button', { name: 'Generate' }));
		await expect(canvasElement.querySelector('.output')).toBeInTheDocument();
	}}
>
	<div style="max-width:600px;padding:24px">
		<SchemaPlayground />
	</div>
</Story>

<Story
	name="Custom initial code"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button', { name: 'Generate' }));
		await expect(canvasElement.querySelector('.output')).toBeInTheDocument();
	}}
>
	<div style="max-width:600px;padding:24px">
		<SchemaPlayground initialCode="z.string().email()" />
	</div>
</Story>

<Story
	name="Shows error on invalid schema"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button', { name: 'Generate' }));
		await expect(canvas.getByText(/SyntaxError|Error|not a function/i)).toBeInTheDocument();
	}}
>
	<div style="max-width:600px;padding:24px">
		<SchemaPlayground initialCode="this is not valid" />
	</div>
</Story>
