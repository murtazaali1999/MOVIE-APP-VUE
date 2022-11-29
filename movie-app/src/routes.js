import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import MovieDetail from "./components/MovieDetail.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    }, {
        name: "movieDetail",
        path: "/movie",
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;