<template>
    <header class="sticky top-[3.5rem] z-30 lg:block w-full mx-auto border-b border-gray-200 hidden">
        <nav
            :class="isNavbarTop ? 'shadow' : 'shadow-lg'"
            class="bg-slate-300 border-gray-200 py-2 dark:bg-gray-800"
        >
            <div class="flex flex-nowrap justify-center items-center">
                <div class="flex w-auto justify-between items-center">
                    <ul class="flex space-x-3">
                        <li v-for="(menu, index) in navbar_menu" :key="index">
                            <a href="#" class="block px-2 text-gray-800 text-sm font-medium">
                                {{ menu.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data: () => ({
        isNavbarTop: false,
        navbar_menu: [
            { title: 'Ayurveda', link: '' },
            { title: 'Homeopathy', link: '' },
            { title: 'Naturopathy', link: '' },
            { title: 'Yoga', link: '' },
            { title: 'Meditation', link: '' },
            { title: 'Physiotherapy', link: '' },
            { title: 'Psychology', link: '' },
            { title: 'Nutrition', link: '' },
            { title: 'More Therapies', link: '' },
        ],
    }),
    methods: {
        handleScroll() {
            this.isNavbarTop = window.scrollY === 0
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style scoped></style>
