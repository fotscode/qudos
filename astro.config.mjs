import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Qudos',
            logo: {
                dark: './public/qudos-dark.png',
                light: './public/qudos-light.png',
                replacesTitle: true,
            },
            editLink: {
                baseUrl: 'https://github.com/fotscode/qudos/edit/main/',
            },
            social: {
                github: 'https://github.com/fotscode/qudos',
            },
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
                            label: 'Hoja de ruta',
                            slug: 'roadmap',
                        }
                    ]
                },
                {
                    label: 'Conceptos clave',
                    items: [
                        {
                            label: 'El Cubit',
                            slug: 'concepts/qubit',
                        },
                        {
                            label:'Retroceso de fase',
                            slug:'concepts/phase-kickback'
                        },
                        {
                            label: 'Oráculos',
                            slug: 'concepts/oracles',
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
                            label:'Descomputación',
                            slug:'concepts/uncomputation'
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
                            label: 'Codificación superdensa', 
                            slug: 'primitives/superdense-coding' 
                        },
                        {
                            label:'Teleportación cuántica',
                            slug:'primitives/teleportation'
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
                        { label: 'Deutsch-Jozsa', slug: 'algorithms/deutsch-jozsa' },
                        { label: 'Bernstein-Vazirani', slug: 'algorithms/bernstein-vazirani' },
                        { label: 'Grover', slug: 'algorithms/grover' },
                        { label: 'Shor', slug: 'algorithms/shor' },
                    ],
                    translations: {
                        en: 'Algorithms',
                    },
                },
                {
                    label: 'Pruebas matemáticas',
                    collapsed: true,
                    items: [
                        {
                            label: 'Eje X',
                            slug: 'proofs/x-axis',
                        },
                        {
                            label: 'Eje Y',
                            slug: 'proofs/y-axis',
                        },
                        {
                            label: 'Eje Z',
                            slug: 'proofs/z-axis',
                        },
                        { label: 'Hadamard', slug: 'proofs/hadamard' },
                        {
                            label: 'CNOT',
                            slug: 'proofs/cnot',
                        },
                        {
                            label: 'Deutsch-Jozsa',
                            slug: 'proofs/deutsch-jozsa',
                        },
                        {
                            label: 'Grover',
                            slug: 'proofs/grover',
                        },
                        {
                            label: 'Shor',
                            slug: 'proofs/shor',
                        },
                    ],
                    translations: {
                        en: 'Math proofs',
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


