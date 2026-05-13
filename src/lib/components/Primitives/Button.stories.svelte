<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { userEvent, within, expect, fn } from 'storybook/test';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Primitives/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			variant: { control: 'select', options: ['default', 'primary', 'ghost', 'danger'] }
		},
		args: { onclick: fn() }
	});
</script>

<Story
	name="Default"
	args={{ label: 'Run benchmark' }}
	play={async ({ args, canvasElement }) => {
		args.onclick.mockClear();
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
		await expect(args.onclick).toHaveBeenCalledOnce();
	}}
/>

<Story name="Primary" args={{ label: 'Run', variant: 'primary' }} />
<Story name="Ghost" args={{ label: 'Reset', variant: 'ghost' }} />
<Story name="Danger" args={{ label: 'Clear', variant: 'danger' }} />

<Story
	name="Disabled"
	args={{ label: 'Run', disabled: true }}
	play={async ({ args, canvasElement }) => {
		args.onclick.mockClear();
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
		await expect(args.onclick).not.toHaveBeenCalled();
	}}
/>

<Story name="All variants">
	<div style="display:flex;gap:8px;flex-wrap:wrap;padding:16px">
		<Button label="Default" />
		<Button label="Primary" variant="primary" />
		<Button label="Ghost" variant="ghost" />
		<Button label="Danger" variant="danger" />
		<Button label="Disabled" disabled />
	</div>
</Story>
