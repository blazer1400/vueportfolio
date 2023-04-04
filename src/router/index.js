import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Overview from "@/views/Overview.vue";
import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
