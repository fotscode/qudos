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
                    label: 'Pruebas matemáticas',
                    items: [{ label: 'Hadamard', slug: 'proofs/hadamard' }],
                    translations: {
                        en: 'Math proofs',
                    }
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
    site: "https://fotscode.github.io"
})
