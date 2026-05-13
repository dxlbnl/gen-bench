import { generate } from 'zod4-mock';
import {
	userSchema,
	categorySchema,
	productSchema,
	variantSchema,
	reviewSchema,
	orderSchema,
	type EcommerceWorld,
	type User,
	type Category,
	type Product,
	type Variant
} from '../schemas/ecommerce';

export function generateWorld(seed?: number): EcommerceWorld {
	const users: User[] = Array.from({ length: 10 }, () => generate(userSchema, { seed }));
	const categories: Category[] = Array.from({ length: 5 }, (_, i) =>
		generate(categorySchema, { seed: seed != null ? seed + i : undefined })
	).map((c, i) => ({ ...c, parentId: i > 2 ? categories[i - 3].id : null }));

	const products: Product[] = Array.from({ length: 20 }, (_, i) =>
		generate(productSchema, { seed: seed != null ? seed + 100 + i : undefined })
	).map((p) => ({ ...p, categoryId: categories[Math.floor(Math.random() * categories.length)].id }));

	const variants: Variant[] = products.flatMap((p) =>
		Array.from({ length: 3 }, (_, i) =>
			generate(variantSchema, { seed: seed != null ? seed + 200 + i : undefined })
		).map((v) => ({ ...v, productId: p.id }))
	);

	const reviews = Array.from({ length: 30 }, (_, i) =>
		generate(reviewSchema, { seed: seed != null ? seed + 300 + i : undefined })
	).map((r) => ({
		...r,
		productId: products[Math.floor(Math.random() * products.length)].id,
		userId: users[Math.floor(Math.random() * users.length)].id
	}));

	const orders = users.slice(0, 5).map((u, i) => {
		const base = generate(orderSchema, { seed: seed != null ? seed + 400 + i : undefined });
		return {
			...base,
			userId: u.id,
			items: base.items.map((item) => {
				const p = products[Math.floor(Math.random() * products.length)];
				const v = variants.find((v) => v.productId === p.id) ?? variants[0];
				return { ...item, productId: p.id, variantId: v.id, unitPrice: p.price };
			}),
			total: base.items.reduce((sum, item) => sum + item.unitPrice * item.qty, 0)
		};
	});

	return { users, categories, products, variants, reviews, orders };
}
