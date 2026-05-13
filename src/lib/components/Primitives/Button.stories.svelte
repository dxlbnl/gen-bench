<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
	const { Story } = defineMeta({
		title: 'Primitives/Button',
		component: Button,
		argTypes: {
			variant: { control: 'select', options: ['default', 'primary', 'ghost', 'danger'] }
		}
	});
</script>

<Story name="Default" args={{ label: 'Run benchmark' }} />
<Story name="Primary" args={{ label: 'Run', variant: 'primary' }} />
<Story name="Ghost" args={{ label: 'Reset', variant: 'ghost' }} />
<Story name="Danger" args={{ label: 'Clear', variant: 'danger' }} />
<Story name="Disabled" args={{ label: 'Run', disabled: true }} />

<Story name="All variants">
	<div style="display:flex;gap:8px;flex-wrap:wrap;padding:16px">
		<Button label="Default" />
		<Button label="Primary" variant="primary" />
		<Button label="Ghost" variant="ghost" />
		<Button label="Danger" variant="danger" />
		<Button label="Disabled" disabled />
	</div>
</Story>
