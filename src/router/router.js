import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import DetailKaz from '../views/Detailkaz.vue'
import DetailEng from '../views/Detaileng.vue'
import Registration from '../views/Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Detailkaz',
      name: 'Detailkaz',
      component: DetailKaz
    },
    {
      path: '/Detaileng',
      name: 'Detaileng',
      component: DetailEng
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    }
  ]
})

export default router