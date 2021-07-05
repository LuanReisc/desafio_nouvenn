import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CadastroUsuario from '../views/Cadastro-usuario.vue';
import UsuariosCadastrados from '../views/Usuarios-cadastrados.vue';
import CadastroLivro from '../views/Cadastro-livro.vue';
import EmprestarLivro from '../views/Emprestar-livro.vue';
import Devolver from '../views/Devolver.vue';
import LivrosCadastrados from '../views/Livros-cadastrados.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/livro-cadastrados',
    name: 'livro-cadastrados',
    component: LivrosCadastrados
  },
  {
    path: '/devolver',
    name: 'devolver',
    component: Devolver
  },
  {
    path: '/usuarios-cadastrados',
    name: 'usuarios-cadastrados',
    component: UsuariosCadastrados
  },
  {
    path: '/emprestar-livro',
    name: 'emprestar-livro',
    component:EmprestarLivro
  },
  {
    path: '/cadastro-usuario',
    name: 'cadastro-usuario',
    component: CadastroUsuario
  },
  {
    path: '/cadastro-livro',
    name: 'cadastro-livro',
    component: CadastroLivro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
