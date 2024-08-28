import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Quantum Katas',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Español',
                    lang: 'es',
                },
                en: {
                    label: 'English',
                    lang: 'en',
                },
            },
            sidebar: [
                {
                    label: 'Compuertas',
                    items: [{ label: 'Hadamard', slug: 'gates/hadamard' }],
                    translations: {
                        en: 'Gates',
                    },
                },
                {
                    label: 'Algoritmos',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Deutsch-Jozsa', slug: 'algorithms/deutsch-jozsa' },
                    ],
                    translations: {
                        en: 'Algorithms',
                    },
                },
                {
                    label: 'Referencias',
                    autogenerate: { directory: 'reference' },
                    translations: {
                        en: 'References',
                    },
                },
            ],
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // Katex plugin options
                },
            ],
        ],
    },
})
