import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>import( "./views/About.vue")
    },
    { path: "/signin", name: "signin", component: () =>import("./views/Home/signin.vue") },
    { path: "/signup", name: "signup", component: () =>import("./views/Home/signup.vue") }
  ]
});
