export default function ({ app }, inject) {
    function importAll(files) {
        files.keys().forEach((key) => {
            const moduleName = key.replace(/^.\/(.*)\.\w+$/, '$1')
            const module = files(key)

            // This is where you can easily switch between the different API BASEPATH
            const Manager = new module.default(app.$http, process.env.API_BASE_URL_DEV)
            // const Manager = new module.default(app.$http, process.env.API_BASE_URL_UAT)
            // const Manager = new module.default(app.$http, process.env.API_BASE_URL_PROD)

            inject(`${moduleName}`, Manager)
        })
    }

    importAll(require.context('@/api', true, /\.js$/))
}
