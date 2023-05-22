<template>
    <div class="z-50 w-full px-4 py-2 bg-teal-900">
        <div class="flex md:flex-row flex-col justify-center items-center">
            <div class="text-md text-white lg:pr-4 lg:mr-3 lg:border-r-4 lg:border-brandColor hidden lg:block">
                Your one place for everything Natural! Let Nature Heal You
            </div>
            <div class="text-md text-white">Download our app</div>
            <div class="flex justify-center md:hidden">
                <img src="@/assets/images/banner/play_store.png" alt="Play Store" class="w-5/12" />
                <img src="@/assets/images/banner/ios_app_store.svg" alt="iOS Store" class="w-[33%]" />
            </div>
            <img
                alt="Play Store"
                class="hidden md:block w-6/12 sm:w-2/12 lg:w-[10%] xl:w-[8%]"
                src="@/assets/images/banner/play_store.png"
            />
            <img
                alt="iOS Store"
                class="hidden md:block w-2/5 sm:w-[14%] lg:w-[8%] xl:w-[6.5%]"
                src="@/assets/images/banner/ios_app_store.svg"
            />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({}),
}
</script>

<style scoped></style>
