import { createWebHistory, createRouter } from "vue-router";
import TaskView from "../components/TaskView.vue";

  const routes =  [
    {
    path: "/",
    component: () => import("../components/LoginView.vue"),
  },
  {
    path: "/home",
    component: () => import("../components/TaskView.vue")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
})



export default router;