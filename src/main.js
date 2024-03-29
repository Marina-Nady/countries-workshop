
import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import DetailsPage from './components/DetailsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details/:name',
        name: 'details',
        component: DetailsPage,
        props: true
  
    },
]

const router =  createRouter({
    history: createWebHashHistory(),
    routes,

    
})

createApp(App).use(router).mount('#app')

