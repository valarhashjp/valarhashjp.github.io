import { createWebHistory, createRouter } from "vue-router";
const Home = () => import("../pages/Home/index.vue");
const CompanyProfile = () => import("../pages/CompanyProfile/index.vue");
const ContactUs = () => import("../pages/ContactUs/index.vue");
const MiningResources = () => import("../pages/MiningResources/index.vue");
const NodeService = () => import("../pages/NodeService/index.vue");

const routes = [
  { path: "/", component: Home },
  {
    path: "/CompanyProfile",
    component: CompanyProfile,
  },
  {
    path: "/ContactUs",
    component: ContactUs,
  },
  {
    path: "/MiningResources",
    component: MiningResources,
  },
  {
    path: "/NodeService",
    component: NodeService,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
