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
                            label: 'Oráculos',
                            slug: 'concepts/oracles',
                        },
                        {
                            label:'Teleportación cuántica',
                            slug:'concepts/teleportation'
                        },
                        {   label: 'Amplificación de amplitudes', 
                            slug: 'concepts/amplitude-amplification' 
                        },
                        {   label: 'Transformada de Fourier',
                            slug: 'concepts/fourier-transform' 
                        },
                        {
                            label:'Uncomputation',
                            slug:'concepts/uncomputation'
                        }
                    ],
                    translations: {
                        en: 'Key concepts',
                    },
                },
                {
                    label: 'Compuertas',
                    items: [
                        {
                            label: 'Pauli-X',
                            slug: 'gates/pauli-x',
                        },
                        {
                            label: 'Pauli-Y',
                            slug: 'gates/pauli-y',
                        },
                        {
                            label: 'Pauli-Z',
                            slug: 'gates/pauli-z',
                        },
                        {
                            label: 'RotX',
                            slug: 'gates/rotx',
                        },
                        {
                            label: 'RotY',
                            slug: 'gates/roty',
                        },
                        {
                            label: 'RotZ',
                            slug: 'gates/rotz',
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
                    ],
                    translations: {
                        en: 'Algorithms',
                    },
                },
                {
                    label: 'Pruebas matemáticas',
                    items: [
                        {
                            label: 'Pauli-X',
                            slug: 'proofs/pauli-x',
                        },
                        {
                            label: 'Pauli-Y',
                            slug: 'proofs/pauli-y',
                        },
                        {
                            label: 'Pauli-Z',
                            slug: 'proofs/pauli-z',
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
    base: '/quantum-katas',
})
