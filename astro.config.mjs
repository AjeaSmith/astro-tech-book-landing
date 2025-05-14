// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Martian Mono",
				cssVariable: "--font-martian-mono",
				weights: [400, 600, 700],
			},
		],
	},
});
