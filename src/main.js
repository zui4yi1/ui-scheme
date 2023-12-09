import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import App from "./App.vue";

// import scheme from "../packages/index";

Vue.config.productionTip = false;
Vue.use(ElementUI);

// Vue.use(scheme);

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
