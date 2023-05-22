<template>
    <div>
        <div
            class="relative flex items-top justify-center items-center min-h-screen"
        >
            <h1 class="text-3xl font-bold underline">
                Hello world! <Icon :icon="$icon.chevronDown" />
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    methods: {
        async login() {
            try {
                const response = await this.$authAPI.login({
                    user_id: 7008575165,
                    otp: 1234,
                });
                this.$toast.success("Logged in successfully", {
                    position: "bottom-right",
                });
            } catch (err) {
                console.log(err);
            }
        },
    },
    mounted() {
        // this.login()
        // console.log(this)
        // console.log(this.$session.isUserLoggedIn())
    },
};
</script>
