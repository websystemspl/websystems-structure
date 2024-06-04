import Vue from 'vue'
import Editor from './components/Editor.vue'

export default {
    install(Vue, options) {
        Vue.component('editor', Editor)
    }
}

