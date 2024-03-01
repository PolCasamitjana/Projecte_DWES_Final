import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import NoticiasView from '../views/NoticiasView.vue'
import RegistroView from '../views/Registro.vue'
import LoginView from '../views/Login.vue'
import MotoView from '../views/MotosView.vue'
import ChatView from '../views/ChatView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/coches',
      name: 'coches',
      component: () => import('../views/CochesView.vue')
    },
    {path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView

  },
  {
    path: '/motos',
    name: 'motos',
    component: MotoView

  },

  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  }
    
  ]
})

export default router
