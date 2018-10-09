import VueRouter from 'vue-router'
import HomeView from '../views/Home'
import DetailView from '../views/Detail'
import NotFoundView from '../views/NotFound'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: DetailView
    },
    {
      path: '*',
      component: NotFoundView
    }
  ]
})