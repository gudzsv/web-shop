import './assets/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createMemoryHistory,createWebHistory} from 'vue-router'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./pages/Favorites.vue')
    }
  ]
})

app.use(autoAnimatePlugin)

app.use(router)

app.mount('#app')
