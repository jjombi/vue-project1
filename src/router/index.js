import About from "./views/About.Vue";


const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: About },
    {

    }
  ]
});


export default router
