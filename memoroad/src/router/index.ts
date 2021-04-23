import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Layout
import Navbar from "../layout/Navbar/TheNavbar.vue";

// Router Modules
import Home from "../views/Home/Home.vue";



const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: { 
      navbar: Navbar, 
    },
    component: Home,
    
  },
  {
    path: "/albums",
    name: "Albums",
    meta: { 
      navbar: Navbar
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Albums/Albums.vue"),
    
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
