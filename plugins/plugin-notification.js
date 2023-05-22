import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
    maxToasts: 20,
    newestOnTop: true,
    transition: 'Vue-Toastification__bounce',
})
