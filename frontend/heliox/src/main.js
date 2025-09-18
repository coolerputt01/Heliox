import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router'
// import  './styles/base.css';
// import  './styles/dashboard.css';
// import  './styles/index.css';
// import  './styles/privacy-policy.css'
// import  './styles/signup.css';
// import  './styles/verify.css';

createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')