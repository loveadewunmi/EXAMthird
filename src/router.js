import { createRouter, createWebHistory } from "vue-router";
import HomeApp from "./components/HomeApp.vue";
import CounterView from "./components/CounterView.vue"
import NotFound from "./components/NotFound.vue"



const routes = [
  { path: "/", name: "Home", component: HomeApp },
  { path: "/counter", name: "Counter", component: CounterView },    
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
