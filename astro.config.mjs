import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Quantum Katas',
            defaultLocale: 'es',
            //social: {
            //  github: 'https://github.com/fotscode',
            //},
            locales: {
                es: {
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
})
