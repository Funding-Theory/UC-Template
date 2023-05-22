<template>
    <header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200">
        <nav
            :class="isNavbarTop ? 'shadow' : 'shadow-lg'"
            class="bg-white border-gray-200 py-2.5 dark:bg-gray-800"
        >
            <div class="flex flex-nowrap justify-between items-center md:mx-8 mx-4">
                <a href="https://naturefit.in" class="flex items-center focus:outline-none">
                    <img src="@/assets/images/navbar/logo.webp" class="h-6 sm:h-9" alt="Naturefit Logo" />
                </a>

                <div class="lg:flex items-center lg:order-2 hidden">
                    <a
                        href="#"
                        class="text-white dark:text-white bg-brandColor hover:bg-brandColorHover font-normal rounded-lg text-sm px-3 py-2 mr-2 focus:outline-none"
                    >
                        Onboard your clinic
                    </a>
                    <a
                        href="#"
                        class="text-brandColor border-2 border-brandColor font-medium rounded-lg text-sm px-3 py-1.5 hover:text-white hover:bg-brandColor"
                    >
                        Sign in / Sign up
                    </a>
                </div>

                <div class="block lg:hidden">
                    <button
                        type="button"
                        aria-expanded="false"
                        aria-controls="mobile-menu-2"
                        data-collapse-toggle="mobile-menu-2"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            class="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div
                    id="mobile-menu-2"
                    class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                >
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 xl:space-x-8 lg:mt-0">
                        <li
                            :key="index"
                            class="group"
                            data-dropdown-delay="100"
                            data-dropdown-trigger="hover"
                            data-dropdown-offset-distance="20"
                            v-for="(menu, index) in navbar_menu"
                            :id="`dropdownHoverButton-${index}`"
                            :data-dropdown-toggle="`dropdownHover-${index}`"
                        >
                            <a
                                href="#"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 group-hover:text-brandColor"
                            >
                                {{ menu.title }}
                                <Icon class="hidden group-hover:inline" :icon="$icon.chevronDown" />
                                <Icon class="inline group-hover:hidden" :icon="$icon.chevronUp" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    :id="`dropdownHover-${index}`"
                    v-for="(menu, index) in navbar_menu"
                    class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-1/4 dark:bg-gray-700 left-1/2"
                >
                    <ul
                        aria-labelledby="dropdownHoverButton"
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                        <li v-for="(item, index) in [0, 1, 2, 3, 4]" :key="index">
                            <a
                                href="#"
                                class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <div
                                    class="overflow-hidden relative max-w-full bg-white rounded-xl flex items-center gap-6 border border-gray-100"
                                >
                                    <img
                                        class="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                                    />
                                    <div class="flex flex-col py-5 pl-24">
                                        <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">
                                            Andrew Alfred
                                        </strong>
                                        <span class="text-slate-500 text-sm font-medium dark:text-slate-400">
                                            Technical advisor
                                        </span>
                                    </div>
                                </div>
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
            { title: 'Our Service', options: [{ image: '', link: '', title: '' }] },
            { title: 'For Doctors', options: [{ image: '', link: '', title: '' }] },
            { title: 'Free Health Tools', options: [{ image: '', link: '', title: '' }] },
            { title: 'Shop', options: [{ image: '', link: '', title: '' }] },
            { title: 'Fitbook', options: [{ image: '', link: '', title: '' }] },
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
