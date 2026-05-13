<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CodePanel from './CodePanel.svelte';
	const { Story } = defineMeta({ title: 'Showcase/CodePanel', component: CodePanel });

	const tabs = [
		{
			label: 'User',
			code: `const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(60),
  email: z.string().email(),
  createdAt: z.date()
});`
		},
		{
			label: 'Product',
			code: `const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  categoryId: z.string().uuid(), // → Category.id
  price: z.number().min(0.01),
  rating: z.number().min(1).max(5)
});`
		}
	];
</script>

<Story name="Two tabs">
	<div style="width:480px;padding:24px">
		<CodePanel {tabs} />
	</div>
</Story>
