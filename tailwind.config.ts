import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#218fea',    // Azul Brillante (Botones y CTAs)
                'brand-secondary': '#1b5ca0',  // Azul Medio (Corporativo / Hover states)
                'brand-navy': '#242e45',       // Navy Oscuro (Textos, Headings, Footer)
                'brand-teal': '#1ea1be',       // Teal (Acentos, Iconos)
                'brand-gray': '#878898',       // Gris Medio (Texto secundario)
                'brand-light': '#F8FAFC',      // Fondo muy claro
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
