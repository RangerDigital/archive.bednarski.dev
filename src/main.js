import Vue from "vue";
import App from "./App.vue";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import anime from "animejs/lib/anime.min.js";

Vue.prototype.$anime = anime;

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
