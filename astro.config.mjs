// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.sergio93ma.dev',
    output: 'static',
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Inter',
            cssVariable: '--font-inter',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        weight: '100 900',
                        style: 'normal',
                        display: 'swap',
                        src: ['./src/assets/fonts/inter-variable.woff2'],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'JetBrains Mono',
            cssVariable: '--font-mono',
            fallbacks: ['monospace'],
            options: {
                variants: [
                    {
                        weight: '100 800',
                        style: 'normal',
                        display: 'swap',
                        src: ['./src/assets/fonts/jetbrains-mono-variable.woff2'],
                    },
                ],
            },
        },
    ],
});
