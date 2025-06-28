import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Users from '@/pages/Users.vue'
import userForm from '@/pages/userForm.vue'
import login from '@/pages/login.vue'
import APIDisplay from '@/pages/APIDisplay.vue'
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users
  },
  {
    path: ROUTES.USER_FORM,
    name: ROUTE_NAMES.USER_FORM,
    component: userForm
  },
  {
    path: ROUTES.LOGIN,
    name: ROUTE_NAMES.LOGIN,
    component: login,
  },
   {
    path: ROUTES.APIDisplay,
    name: ROUTE_NAMES.APIDisplay,
    component: APIDisplay,
  }

 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 