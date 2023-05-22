import Vue from 'vue'
import { Icon } from '@iconify/vue2'
import chevronUp from '@iconify/icons-tabler/chevron-up'
import chevronDown from '@iconify/icons-tabler/chevron-down'

Vue.component('Icon', Icon)

export default ({ app }, inject) => {
    inject('icon', {
        chevronUp: chevronUp,
        chevronDown: chevronDown,
    })
}
