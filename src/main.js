import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import boost from "highcharts/modules/boost";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

const opts = {
    theme: {
        dark: true,
    },
    icons: {
        iconfont: 'mdi'
    }
}

const vuetify = new Vuetify(opts)

Vue.use(Vuetify);
Vue.use(HighchartsVue);
boost(Highcharts);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount("#app");