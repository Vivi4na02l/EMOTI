import Vue from 'vue';
import VueRouter from 'vue-router';
import Mainpage from '../views/Mainpage.vue';
// import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Jogos from '../views/Jogos.vue';
import Jogo1 from '../views/JogoRecognizeEmotion.vue';

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
	{
		path: '/Conheces_esta_expressão?',
		name: 'Jogo1',
		component: Jogo1,
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
