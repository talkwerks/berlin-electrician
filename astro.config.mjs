// @ts-check
import { defineConfig } from 'astro/config';
import critters from 'astro-critters';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://berlin-electrician.vercel.app',
    integrations: [
        critters({
            preload: 'media',
            reduceInlineStyles: false,
            pruneSource: true,
        }),
        compress({
            css: true,
            html: true,
            img: true,
            svg: true,
            js: true,
            encodeHTML: true,
        }),
    ],
});
