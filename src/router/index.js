import Vue from 'vue';
import VueRouter from 'vue-router';
import Mainpage from '../views/Mainpage.vue';
// import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Jogos from '../views/Jogos.vue';

// import store from '../store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		alias: '/mainpage',
		name: 'Mainpage',
		component: Mainpage,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/Jogos',
		name: 'Jogos',
		component: Jogos,
	},
	// {
	// 	path: '/gifts',
	// 	name: 'Gifts',
	// 	component: Gifts,
	// 	meta: {
	// 		requiresAuth: true,
	// 	},
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach((to, from, next) => {
// 	if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
// 		next({ name: 'Login' });
// 	} else {
// 		next();
// 	}
// });

export default router;
