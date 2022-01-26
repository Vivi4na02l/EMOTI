import Vue from 'vue';
import VueRouter from 'vue-router';
import Mainpage from '../views/Mainpage.vue';
// import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Edit from '../views/Edit.vue';
import Jogos from '../views/Jogos.vue';
import Jogo from '../views/Jogo.vue';
import JogoEdit from '../views/JogoEdit.vue';
import Psicologos from '../views/Psicologos.vue';
import SuporteFamiliar from '../views/SuporteFamiliar.vue';
import SobreNos from '../views/SobreNos.vue';

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
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/edit',
		name: 'Edit',
		component: Edit
	},
	{
		path: '/Jogos',
		name: 'Jogos',
		component: Jogos,
	},
	{
		path: '/Jogo',
		name: 'Jogo',
		component: Jogo,
	},
	{
		path: '/JogoEdit',
		name: 'JogoEdit',
		component: JogoEdit
	},
	{
		path: '/Psicologos',
		name: 'Psicologos',
		component: Psicologos,
	},
	{
		path: '/SuporteFamiliar',
		name: 'SuporteFamiliar',
		component: SuporteFamiliar,
	},
	{
		path: '/SobreNos',
		name: 'SobreNos',
		component: SobreNos,
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
