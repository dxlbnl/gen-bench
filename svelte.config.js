import adapter from '@sveltejs/adapter-vercel';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: './src/lib/docs/DocsLayout.svelte',
			highlight: {
				highlighter: async (code, lang, meta) => {
					if (meta?.includes('playground')) {
						const safe = code
							.replace(/\\/g, '\\\\')
							.replace(/`/g, '\\`')
							.replace(/\$/g, '\\$');
						return `<Components.SchemaPlayground initialCode={\`${safe}\`} />`;
					}
					const html = await codeToHtml(escapeSvelte(code), {
						lang: lang ?? 'text',
						theme: 'github-dark-dimmed'
					});
					const safeSource = code
						.replace(/\\/g, '\\\\')
						.replace(/`/g, '\\`')
						.replace(/\$/g, '\\$');
					return `<Components.CodeBlock raw={\`${escapeSvelte(html)}\`} source={\`${safeSource}\`} />`;
				}
			}
		})
	],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({ runtime: 'nodejs22.x' })
	}
};

export default config;
