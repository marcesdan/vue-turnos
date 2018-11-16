import Vue from 'vue'
import Router from 'vue-router'
import Portada from '../components/Portada'
import Ingreso from '../components/Ingreso'
import Turnos from '../components/Turnos'
Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Portada,
      name: 'portada'
    },
    {
      path: '/ingreso',
      component: Ingreso,
      name: 'ingreso'
    },
    {
      path: '/turnos',
      component: Turnos,
      name: 'turnos'
    },
  ]
});


