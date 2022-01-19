import Vue from 'vue';
import VueRouter from 'vue-router';
import Mainpage from '../views/Mainpage.vue';
// import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Jogos from '../views/Jogos.vue';
import Jogo1 from '../views/JogoRecognizeEmotion.vue';
import Psicologos from '../views/Psicologos.vue';

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
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/Jogos',
		name: 'Jogos',
		component: Jogos,
	},
	{
		path: '/Jogo1',
		name: 'Jogo1',
		component: Jogo1,
	},
	{
		path: '/Psicologos',
		name: 'Psicologos',
		component: Psicologos,
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
