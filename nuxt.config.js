export default {
    components: true,
    modules: [
        '@nuxtjs/dayjs',
        '@nuxtjs/axios',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        'vue-toastification/nuxt',
    ],
    buildModules: ['@nuxtjs/dotenv'],
    plugins: [
        // The order for this will remain same
        // DO NOT CHANGE THE ORDER
        { src: '@/plugins/plugin-session', mode: 'client' },
        '@/plugins/plugin-axios',
        '@/plugins/plugin-api',
        // Add other plugins here
        '@/plugins/plugin-icon',
        { src: '@plugins/plugin-notification', mode: 'client' },
    ],
    css: ['@/assets/css/main.css', '@/assets/fonts/css/nuxt-google-fonts.css'],
    head: {
        htmlAttrs: { lang: 'en' },
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        title: 'Book Ayurvedic, Yoga & Siddha Consultation Online - Naturefit',
        meta: [
            { charset: 'utf-8' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    googleFonts: {
        preload: true,
        prefetch: true,
        download: true,
        display: 'swap',
        preconnect: true,
        overwriting: false,
        outputDir: '@/assets/fonts',
        families: {
            'Encode+Sans': ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
            'Lexend+Deca': ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        },
    },
    build: { postcss: { postcssOptions: { plugins: { tailwindcss: {}, autoprefixer: {} } } } },
}
