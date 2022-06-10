import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // 1: import component
import AboutView from "../views/AboutView.vue"; // 1
import TestRouter from "../components/TestRouter.vue";
import ChiTietBaiViet from "../components/ChiTietBaiViet.vue";

export const routes = [
  {
    //2: khai bao
    path: "/", // duong dan
    component: HomeView, //Ten component
  },
  {
    // 2
    path: "/thongTin",
    component: AboutView,
  },
  {
    // 2
    path: "/test",
    component: TestRouter,
  },
  {
    // 2
    path: "/chiTiet/:id?", //co dấu ? la id co the k co gtri
    component: ChiTietBaiViet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
