import Vue from 'vue';
import VueRouter from 'vue-router';
import Mainpage from '../views/Mainpage.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import EditarPerfil from '../views/EditarPerfil.vue';
import Jogos from '../views/Jogos.vue';
import Jogo from '../views/Jogo.vue';
import JogoEdit from '../views/JogoEdit.vue';
import Psicologos from '../views/Psicologos.vue';
import SuporteFamiliar from '../views/SuporteFamiliar.vue';
import SobreNos from '../views/SobreNos.vue';
import SaibaMais from '../views/SaibaMais.vue';
import store from '../store';

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
		path: '/editarPerfil',
		name: 'EditarPerfil',
		component: EditarPerfil,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/Jogos',
		name: 'Jogos',
		component: Jogos,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/Jogo',
		name: 'Jogo',
		component: Jogo,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/JogoEdit',
		name: 'JogoEdit',
		component: JogoEdit,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/Psicologos',
		name: 'Psicologos',
		component: Psicologos,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/SuporteFamiliar',
		name: 'SuporteFamiliar',
		component: SuporteFamiliar,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/SaibaMais',
		name: 'SaibaMais',
		component: SaibaMais,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/SobreNos',
		name: 'SobreNos',
		component: SobreNos
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
		next({ name: 'Login' });
	} else {
		next();
	}
});


export default router;