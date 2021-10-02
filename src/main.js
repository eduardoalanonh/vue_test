import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Loading from "@/components/Loading.vue";


import {CollapsePlugin} from 'bootstrap-vue/dist/bootstrap-vue.esm'

Vue.use(CollapsePlugin)

Vue.config.productionTip = false

Vue.component("Loading", Loading);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
