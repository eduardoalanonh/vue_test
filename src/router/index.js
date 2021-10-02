import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import Customer from '../views/Customer';
import Number from '../views/Number';


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {guestOnly: true}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {guestOnly: true}
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {authOnly: true}
    },
    {
        path: "/customer/:id",
        name: "Customer",
        component: Customer,
        props: true,
        meta: {authOnly: true},
    },
    {
        path: '/customer/:customer_id/number/:id',
        name: "Number",
        props: true,
        component: Number,
        meta: {authOnly: true},
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

function isLoggedIn() {
    return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        if (!isLoggedIn()) {
            next({
                path: "/",
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        if (isLoggedIn()) {
            next({
                path: "/dashboard",
                query: {redirect: to.fullPath}
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
