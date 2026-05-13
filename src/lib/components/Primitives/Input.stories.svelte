<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from './Input.svelte';
	const { Story } = defineMeta({ title: 'Primitives/Input', component: Input });
</script>

<Story name="Default" args={{ placeholder: 'Filter rows…' }} />
<Story name="Search" args={{ placeholder: 'Search…', type: 'search' }} />
