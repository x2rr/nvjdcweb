
import { createRouter, createWebHistory } from 'vue-router'
// import Index from '@/views/Index.vue' createHashHistory 
// import Login from '@/views/Logn.vue'
const Index = () => import('@/views/Index.vue')
const Login = () => import('@/views/Logn.vue')
const Captcha = () => import('@/views/Captcha.vue')
const routes = [
  { path: '/', component: Index, meta: { hidden: true, title: "jd活动小助手" } },
  { path: '/login', component: Login, meta: { hidden: true, title: "jd活动小助手" } },
  { path: '/Captcha/:id?', component: Captcha, meta: { hidden: true, title: "jd活动小助手" }, props: true },
]


const router = createRouter({

  history: createWebHistory(),
  routes
})

export default router
