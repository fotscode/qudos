import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const googleAnalyticsId = 'G-2TSNFLLBJE'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            head: [
              // Adding google analytics
              {
                tag: 'script',
                attrs: {
                  src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
                },
              },
              {
                tag: 'script',
                content: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${googleAnalyticsId}');
                `,
              },
            ],
            title: 'Qudos',
            logo: {
                dark: './public/qudos-dark.png',
                light: './public/qudos-light.png',
                replacesTitle: true,
            },
            editLink: {
                baseUrl: 'https://github.com/fotscode/qudos/edit/main/',
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/fotscode/qudos'},
            ],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Español',
                    lang: 'es',
                },
            },
            sidebar: [
                {
                    label:'Introducción',
                    translations: {
                        en: 'Introduction',
                    },
                    items: [
                        {
                            label: 'Primeros pasos',
                            slug: 'introduction/first-steps',
                        },
                        {
                            label: 'Hoja de ruta',
                            slug: 'introduction/roadmap',
                        },
                        {
                            label: 'Índice',
                            slug: 'introduction/table-of-contents',
                        }
                    ]
                },
                {
                    label: 'Conceptos clave',
                    items: [
                        {
                            label: 'Introducción',
                            slug: 'concepts/introduction',
                        },
                        {
                            label: 'El Cubit',
                            slug: 'concepts/qubit',
                        },
                        {
                            label: 'Entrelazamiento',
                            slug: 'concepts/entanglement',
                        },
                        {
                            label:'Teorema de no clonación',
                            slug:'concepts/no-cloning-theorem'
                        },
                        {
                            label: 'Oráculos',
                            slug: 'concepts/oracles',
                        },
                        {
                            label:'Retroceso de fase',
                            slug:'concepts/phase-kickback'
                        },
                    ],
                    translations: {
                        en: 'Key concepts',
                    },
                },
                {
                    label: 'Puertas',
                    items: [
                        {
                            label: 'Introducción',
                            slug: 'gates/introduction',
                        },
                        {
                            label: 'Eje X',
                            slug: 'gates/x-axis',
                        },
                        {
                            label: 'Eje Y',
                            slug: 'gates/y-axis',
                        },
                        {
                            label: 'Eje Z',
                            slug: 'gates/z-axis',
                        },
                        { label: 'Hadamard', slug: 'gates/hadamard' },
                        {
                            label: 'CNOT',
                            slug: 'gates/cnot',
                        },
                        {
                            label: 'Swap',
                            slug: 'gates/swap',
                        },
                    ],
                    translations: {
                        en: 'Gates',
                    },
                },
                {
                    label: 'Primitivas',
                    items: [
                        {
                            label: 'Introducción', 
                            slug: 'primitives/introduction' 
                        },
                        {
                            label: 'Codificación superdensa', 
                            slug: 'primitives/superdense-coding' 
                        },
                        {
                            label:'Teleportación cuántica',
                            slug:'primitives/teleportation'
                        },
                        {
                            label:'Descomputación',
                            slug:'primitives/uncomputation'
                        },
                        {   label: 'Amplificación de amplitudes', 
                            slug: 'primitives/amplitude-amplification' 
                        },
                        {   label: 'Transformada de Fourier',
                            slug: 'primitives/fourier-transform' 
                        },
                        {   label: 'Estimación de fase',
                            slug: 'primitives/phase-estimation' 
                        },
                    ],
                    translations: {
                        en: 'Primitives',
                    },
                },
                {
                    label: 'Algoritmos',
                    items: [
                        { label: 'Introducción', slug: 'algorithms/introduction' },
                        { label: 'Deutsch-Jozsa', slug: 'algorithms/deutsch-jozsa' },
                        { label: 'Bernstein-Vazirani', slug: 'algorithms/bernstein-vazirani' },
                        { label: 'Grover', slug: 'algorithms/grover' },
                        { label: 'Shor', slug: 'algorithms/shor' },
                    ],
                    translations: {
                        en: 'Algorithms',
                    },
                },
            ],
            customCss: [ './src/styles/global.css' ]
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
    site: 'https://fotscode.github.io',
    base: '/qudos',
})


