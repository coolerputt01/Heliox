import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../pages/dashboard.vue'
// import signin from '../pages/signin.vue'
// import signup from '../pages/signup.vue'
// // import verify from '../pages/verify.vue'
import index from '../pages/index.vue'

const routes = [
{ path: '/', name: 'Home', component: index },
// { path: '/signin', component: signin },
// { path: '/signUp', component: signup },
// // { path: '/verify', component: verify },
{ path: '/Dashboard', name: 'dashboard', component: dashboard }
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router