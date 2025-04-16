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
                    label:'Hoja de ruta',
                    translations: {
                        en: 'Roadmap'
                    },
                    slug: 'roadmap'
                },
                {
                    label: 'Conceptos clave',
                    items: [
                        {
                            label: 'Codificación superdensa', 
                            slug: 'concepts/superdense-coding' 
                        },
                        {
                            label: 'El Qubit',
                            slug: 'concepts/qubit',
                        },
                        {
                            label:'Teleportación cuántica',
                            slug:'concepts/teleportation'
                        },
                        {
                            label:'Teorema de no clonación',
                            slug:'concepts/no-cloning-theorem'
                        },
                        {
                            label:'Retroceso de fase',
                            slug:'concepts/phase-kickback'
                        },
                        {
                            label: 'Oráculos',
                            slug: 'concepts/oracles',
                        },
                        {   label: 'Amplificación de amplitudes', 
                            slug: 'concepts/amplitude-amplification' 
                        },
                        {   label: 'Transformada de Fourier',
                            slug: 'concepts/fourier-transform' 
                        },
                        {   label: 'Estimación de fase',
                            slug: 'concepts/phase-estimation' 
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
                    ],
                    translations: {
                        en: 'Gates',
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


