// @ts-check
import { defineConfig } from 'astro/config';
import critters from 'astro-critters';

// https://astro.build/config
export default defineConfig({
    site: 'https://berlin-electrician.vercel.app',
    integrations: [
        critters({
            preload: 'media',
            reduceInlineStyles: false,
            pruneSource: true,
        }),
    ],
});
