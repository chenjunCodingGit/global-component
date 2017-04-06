import LoadingComponent from './Loading.vue'

const Loading = {
    install: function(Vue) {
        Vue.component('Loading', LoadingComponent) //(公用的组件名称，该组件的名次)
    }
}

export default Loading