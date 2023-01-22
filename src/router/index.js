import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-user',
      name: 'adduser',
      component: AddUser
    },
    {
      path: '/users/:userId',
      name: 'edituser',
      component: EditUser
    },
    {
      path: '/about',
      name: 'about',
          component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
