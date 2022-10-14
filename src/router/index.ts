import { createWebHistory, createRouter } from "vue-router";
const Home = () => import("../pages/Home/index.vue");
const CompanyProfile = () => import("../pages/CompanyProfile/index.vue");
const ContactUs = () => import("../pages/ContactUs/index.vue");
const MiningResources = () => import("../pages/MiningResources/index.vue");
const NodeService = () => import("../pages/NodeService/index.vue");
const MiningResourcesIndex = ()=>import("../pages/MiningResources/components/Main.vue")
const MinerSales = ()=>import("../pages/MiningResources/components/MinerSales.vue")
const MinerHostingServices = ()=>import("../pages/MiningResources/components/HostingServices.vue")
const News = ()=>import ("../pages/News/index.vue")


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
    children: [
      {
        path:'',
        component:MiningResourcesIndex,
      },
      {
        path: "MinerSales",
        component: MinerSales,
      },
      {
        path: "MinerHostingServices",
        component: MinerHostingServices,
      },
    ],
  },
  {
    path: "/NodeService",
    component: NodeService,
  },
  {
    path:"/News",
    component:News
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
