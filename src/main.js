import Vue from "vue";
import App from "./App.vue";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import anime from "animejs/lib/anime.min.js";
import VueGtag from "vue-gtag";
import router from "./router/"

Vue.prototype.$anime = anime;


Vue.use(VueGtag, {
  config: {
    id: "UA-177948119-1",
    params: {
      send_page_view: true,
    },
  },
});

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
