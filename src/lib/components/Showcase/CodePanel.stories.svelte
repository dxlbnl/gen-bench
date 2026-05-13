<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { userEvent, within, expect } from 'storybook/test';
	import CodePanel from './CodePanel.svelte';

	const { Story } = defineMeta({
		title: 'Showcase/CodePanel',
		component: CodePanel,
		tags: ['autodocs']
	});

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

<Story
	name="Two tabs"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const userTab = canvas.getByRole('button', { name: 'User' });
		const productTab = canvas.getByRole('button', { name: 'Product' });
		await expect(userTab).toHaveClass('active');
		await expect(productTab).not.toHaveClass('active');
		await userEvent.click(productTab);
		await expect(productTab).toHaveClass('active');
		await expect(userTab).not.toHaveClass('active');
	}}
>
	<div style="width:480px;padding:24px">
		<CodePanel {tabs} />
	</div>
</Story>
