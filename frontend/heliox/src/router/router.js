import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
import signin from '../pages/signin.vue'
import signup from '../pages/signup.vue'
import verify from '../pages/verify.vue'
import privacy_policy from '../pages/privacy-policy.vue'
import dashboard from '../pages/dashboard.vue'



const routes = [
{ path: '/', name: 'Home', component: index },
{ path: '/signin', component: signin },
{ path: '/signUp', component: signup },
{ path: '/verify', component: verify },
{ path: '/privacy_policy', name: 'privacy_policy', component: privacy_policy },
{ path: '/Dashboard', name: 'dashboard', component: dashboard }
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router