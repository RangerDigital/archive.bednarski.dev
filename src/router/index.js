import Vue from "vue"
import VueRouter from "vue-router"

import LandingPage from "../views/LandingPage.vue";
import HackPage from "../views/HackPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/hack",
    name: "HackPage",
    component: HackPage,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router