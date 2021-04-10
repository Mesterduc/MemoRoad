import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Layout
import Layout from "../layout/TheNavbar.vue";
// import Layout2 from "../layouts/BaseNavbar2.vue";

// Router Modules
import Home from "../views/Home.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { 
      navbar: Layout, 
    },
    component: Home,
    
  },
  {
    path: "/about",
    name: "About",
    meta: { 
      navbar: Layout
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
