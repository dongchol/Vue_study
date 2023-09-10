/* eslint-disable */
import { createWebHistory, createRouter } from "vue-router";
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

const routes = [
	{
        path: '/',
        redirect: '/login',
    },
    {
		path: "/login",
		//name: "HelloWorld",
		component: () => import('@/views/LoginPage.vue'),
	},
    {
		path: "/signup",
		//name: "HelloWorld",
		component: () => import('@/views/SignupPage.vue'),
	},
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFoundPage.vue'),
    },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
